
DROP TABLE IF EXISTS basiceg.app_events;

CREATE TABLE basiceg.app_events(
    -- generate random uuid
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    event_name TEXT NOT NULL,
    -- JSONB - for json data stored in binary optimized format
    metadata JSONB DEFAULT '{}',

    created_at TIMESTAMP DEFAULT NOW()
);

--
INSERT INTO basiceg.app_events(event_name,metadata)
VALUES
    (
        'jashan',
        '{"realname" : "Lalit", "age" : 22}'
    ),
    (
        'pcg',
        '{"name" : "Lalit", "age" : 21}'
    );

-- SELECT * FROM basiceg.app_events;

SELECT event_name, 
metadata ->> 'realname' AS realname -- -> returns json value but ->> returns plaintext TEXT
FROM basiceg.app_events
WHERE metadata ? 'realname'; -- ? is jsonb existence op , asks if 'realname exists'