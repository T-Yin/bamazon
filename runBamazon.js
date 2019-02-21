const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    startBamazon();
})

// Function that will run on start of connection.
function startBamazon() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        // Welcomes customer and lists items available for sale.
        console.log("\nHello and welcome to Bamazon!");
        console.log("Take a look at our items for sale below:\n");

        // Logs all products into a table.
        console.table(res);

        inquirer
            .prompt([
                {
                    // Asks customers to input ID of item they would like.
                    type: "input",
                    message: "\n enter the item_id of the product you'd like to purchase.",
                    name: "itemID"
                },
                {
                    // Asks customer for the qunatity of the item they would like to purchase.
                    type: "input",
                    message: "\nHow many would you like to purchase?",
                    name: "qty"
                }
            ]).then(function (userRes) {

                // Changes itemID to the index of the item in the product array.
                var i = (userRes.itemID - 1);

                if (userRes.qty <= res[i].stock_qty) {
                    // IF quantity is available, transaction goes through with total price listed.
                    var totalCost = (res[i].price * userRes.qty);
                    var newQty = (res[i].stock_qty - userRes.qty);

                    console.log("\nTransaction was successful!");
                    console.log("Your total cost is $" + totalCost + ".");
                    console.log("Thank you for using Bamazon!\n");
                    // Quantity is then updated in the store.

                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_qty: newQty
                            },
                            {
                                item_id: userRes.itemID
                            }
                        ],

                        function(err, res) {
                            console.log("Note: " + res.affectedRows + " product(s) updated!\n");
                        }
                    );

                    connection.end();

                } else {
                    // IF quantity is unavailable, transaction does not go through.
                    console.log("\nTransaction was unsucessful due to lack of quantity.");
                    console.log("Please try again later, thank you!\n");

                    connection.end();
                };

            });

    });
}
