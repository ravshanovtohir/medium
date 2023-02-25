\c postgres;
-- drop database if exists
drop database if exists medium;

-- create database look
create database medium;

\c medium;

--connect to database

--table branches


drop table if exists users;
create table users (
    user_id serial not null primary key,
    user_email varchar(64) not null unique,
    user_password varchar(255) not null
);

drop table if exists posts;
create table posts (
    post_id serial not null,
    post_title varchar(128) not null,
    post_content text not null,
    time_row int default 0,
    post_author int not null references users(user_id)
);