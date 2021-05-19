update time_interval set start_time='2021-01-01 09:00:00.0', end_time='2021-01-01 20:00:00.0' where id=1;
update time_interval set start_time='2021-01-01 09:00:00.0', end_time='2021-01-01 12:00:00.0' where id=2;
update time_interval set start_time='2021-01-01 13:00:00.0', end_time='2021-01-01 16:00:00.0' where id=3;
insert into time_interval(start_time, end_time) values ('2021-01-01 17:00:00.0', '2021-04-01 20:00:00.0');