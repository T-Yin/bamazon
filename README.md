# Bamazon
An Amazon-like storefront made with MySQL and Inquirer ran through the terminal. The app will take in orders from customers and deplete stock from the store's inventory.

## Required Apps and NPMS
Apps
* MySQL Workbench
* MAMP

NPMs
* MySQL
* Inquirer

## How to use Bamazon
Before running Bamazon, please ensure that the Apps and NPMs above are installed into the correct location. **bamazon.sql** should also be imported into MySQL with MAMP running so that the database, bamazon_db, is available to reference. Below are some screenshots of what those applications should look like to make sure Bamazon runs correctly.

![Image](/images/MAMP.png)
![Image](/images/MySQL.png)

Now we can run the Bamazon app with (hopefully) no difficulties! Open up your terminal to the correct location that the files are located at and run the following code:

```
node runBamazon.js
```

Your terminal should look like so:

![Image](/images/firstRun.png)

You are then prompted to enter the **item_id** of the product as well as the quantity of what you would like to purchase. For this example, we will purchase 10 of the "Socks (6-pack)". The total cost will be given and there will be a notification that the transaction was successful and that a product has been updated. Your connection to the app will then be ended until ran again.

![Image](/images/success.png)

When the app is ran again, notice how the "Socks (6-pack)" **stock_qty** has been updated (25 to 15).

![Image](/images/updatedRun.png)

This time around we will try purchasing 120 "Animal Crackers", 20 more than what is listed in **stock_qty**. Unfortunatly, the transaction does not go through due to lack of quantities and the connection to the Bamazon app is ended.

![Image](/images/fail.png)


