ALTER TABLE skills ADD COLUMN updated timestamp(1) without time zone default current_timestamp;
ALTER TABLE skills ADD COLUMN created timestamp(1) without time zone default current_timestamp;
ALTER TABLE country ADD COLUMN updated timestamp(1) without time zone default now();
ALTER TABLE country ADD COLUMN created timestamp(1) without time zone default current_timestamp;
ALTER TABLE internship ADD COLUMN updated timestamp(1) without time zone default current_timestamp;
ALTER TABLE internship ADD COLUMN created timestamp(1) without time zone default current_timestamp;
ALTER TABLE internship_request ADD COLUMN updated timestamp(1) without time zone default current_timestamp;
ALTER TABLE internship_request ADD COLUMN created timestamp(1) without time zone default current_timestamp;
ALTER TABLE speciality ADD COLUMN updated timestamp(1) without time zone default current_timestamp;
ALTER TABLE speciality ADD COLUMN created timestamp(1) without time zone default current_timestamp;
ALTER TABLE "user" ADD COLUMN updated timestamp(1) without time zone default current_timestamp;
ALTER TABLE "user" ADD COLUMN created timestamp(1) without time zone default current_timestamp ;

