CREATE SCHEMA IF NOT EXISTS basicEG;

-- used for generation of random uuids
CREATE EXTENSION IF NOT EXISTS pgcrypto;

--query (can be written in terminal)
SELECT schema_name
FROM information_schema.schemata -- this is a system view /build-in which gives you info about your db structure, or schema it gives schemas
ORDER BY schema_name;

-- O/P
--     schema_name     
-- --------------------
--  basisceg -> MADE IT RN
--  information_schema -> PG STANDARD METADATA SCHEMA
--  pg_catalog -> internal system schema
--  pg_toast ->pg internal schema for oversized attribute
--  public ->defualt schema present in all db