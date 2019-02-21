DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    price DECIMAL(10,2) NOT NULL,
    stock_qty INTEGER (10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_qty) values
("Animal Crackers", "Grocery", 2.95, 100),
("Fruit Juice Box", "Grocery", 1.99, 75),
("Socks (6-pack)", "Clothing", 7.50, 25),
("100% Cotton Tee", "Clothing", 8.00, 55),
("Summer Dress", "Clothing", 12.99, 15),
("AAA Batteries (12-pack)", "Electronics", 14.99, 20),
("Chromebook", "Computers", 299.99, 3),
("Ottoman Storage", "Furniture", 79.95, 5),
("Floor Lamp", "Furniture", 15.00, 10),
('"To Kill a Mockingbird"', "Books", 6.95, 20);


SELECT * FROM products;
