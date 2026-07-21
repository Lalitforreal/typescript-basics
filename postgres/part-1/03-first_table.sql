-- create the table inside a schema
DROP TABLE IF EXISTS basiceg.students; --inside custom schema create table

CREATE TABLE basiceg.students(
    -- create autoincr int - THIS IS THE PK
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, -- required , pg rejects if not

    -- UNIQUE means no two students should have the same email while primary key
    email TEXT NOT NULL UNIQUE, 
    age INTEGER CHECK(age >= 18),

    -- TIMESTAMP -> stores date and time format
    --  default -> if no val -> take by default
    created_at TIMESTAMP DEFAULT NOW()

);

--  query would have to be 
-- postgresql_p1-# \dt basiceg.*
-- to show the tables as you have it inside a schema 

-- run queries here
-- insert data
INSERT INTO basiceg.students(name, email, age)
VALUES
('Lalit', 'lalit@gmail.com', 21),
('Moksh', 'moksh@gmail.com', 22); 

SELECT * FROM basiceg.students;
-- make sure query ends with ;
