-- CREATE DATABASE postgres;
-- table already created in heroku

CREATE TABLE jobs(
  id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);