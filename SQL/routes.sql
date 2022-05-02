create table routes(
	route_id int(5),
    destination varchar(32),
    max_time time(4),
    path varchar(16),
    primary key (route_id,destination,path)
)