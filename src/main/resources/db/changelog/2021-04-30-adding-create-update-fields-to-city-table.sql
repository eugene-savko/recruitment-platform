ALTER TABLE city
    ADD COLUMN updated timestamp(1) with time zone;
ALTER TABLE city
    ADD COLUMN created timestamp(1) with time zone;