DROP TABLE IF EXISTS basiceg.products_basic;

CREATE TABLE basiceg.products_basic(
    id SERIAL PRIMARY KEY,
    -- string with max len of 100
    name VARCHAR(100) NOT NULL,
    description TEXT, -- normal string 

    stock INTEGER DEFAULT 0,
    -- BIGINT -> store larger whole number than integer
    total_views BIGINT DEFAULT 0,

    -- for decimal values
    --  10 digits before decimal and 2 after decimal is allowed eg. 9999999999.99
    price NUMERIC(10,2),

    is_active BOOLEAN DEFAULT true

);


INSERT INTO basiceg.products_basic(name, description, stock, total_views, price, is_active)
VALUES
(
    'prodcut 1',
    'iphone',
    22,
    33333333333,
    999.99,
    false
),
(
    'prodcut 2',
    'android',
    22,
    33333333333,
    999.99,
    true
);

--queries

SELECT id,name,price FROM basiceg.products_basic
WHERE (is_active = true);