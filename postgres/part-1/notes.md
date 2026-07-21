relational db ->tables
tables connected through relationships

users table
posts table
comments table

1 post -> 1 user
1 comment -> 1 post 

but 
one to many 

1 user -> multiple posts
psql -U postgres -d postgresql_p1 -f part-1/03-first_table.sql

//mongodb 
A non-relational database (commonly known as NoSQL) is a data management system that does not rely on the traditional tabular schema of rows and columns found in relational databases.  Instead, it uses flexible data models such as documents, key-value pairs, graphs, or wide-column stores to store structured, semi-structured, or unstructured data

when relational and non relational db?


## Use relational db when -
when data has clear structure & relationship, implement transactions/joins and you want strong db level validations 
e.g CRM, banking app

use non-relational when -
data changes freq , docs are independent -> lower joins


## how to run
--  to run this you do 
--  psql -U postgres -d postgres -f 01-firstDB.sql

-- -U -> logging as user 
-- -d -> connect to db postgres
-- -f -> run command from this file

-- export password once and for all by terminal 
-- export PGPASSWORD = ""

--  \l for listing all db and \dt for tables \q for exit
-- SELECT current_db(); or SELECT current_user;

## schema vs db vs tables
imagine an amazon DB

Database: amazon
│
├── Schema: public
│     ├── users
│     └── products
│
├── Schema: orders
│     ├── orders
│     └── payments
│
└── Schema: analytics
      ├── revenue
      └── visitors

Schemas let you group related objects:
makes it more organized