ALTER TABLE interview
  ADD COLUMN updated timestamp(1) with time zone;
ALTER TABLE interview
  ADD COLUMN created timestamp(1) with time zone;