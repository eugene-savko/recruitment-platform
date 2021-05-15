ALTER TABLE english_level
    ADD COLUMN updated timestamp(1) with time zone;
ALTER TABLE english_level
    ADD COLUMN created timestamp(1) with time zone;