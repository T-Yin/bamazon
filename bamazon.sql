DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50),
    price INTEGER(10,2) NOT NULL,
    stock_qty INTEGER (10) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;