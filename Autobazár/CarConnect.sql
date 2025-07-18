--CarConnect database--

CREATE TABLE users(
	id_user			SERIAL 			PRIMARY KEY,
	user_name		VARCHAR(100),
	user_email		VARCHAR(100),
	user_password	VARCHAR(15),
	user_location	VARCHAR(50)
)

CREATE TABLE formularmessages(
	id_message		SERIAL			PRIMARY KEY,
	user_name		VARCHAR(100),
	user_email		VARCHAR(100),
	user_message	VARCHAR(1000)
)

CREATE TABLE advertisements(
	id_advertisement	SERIAL		PRIMARY KEY,
	car_brand			VARCHAR(50),
	car_model			VARCHAR(50),
	car_location		VARCHAR(50),
	-- not finished--
)