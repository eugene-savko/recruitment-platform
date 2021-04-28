ALTER TABLE user_time
  ADD COLUMN updated timestamp(1) with time zone;
ALTER TABLE user_time
  ADD COLUMN created timestamp(1) with time zone;