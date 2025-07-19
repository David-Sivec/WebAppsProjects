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
	id_advertisement			SERIAL		PRIMARY KEY,
	advertisement_brand			VARCHAR(50),
	advertisement_model			VARCHAR(50),
	advertisement_location		VARCHAR(50),
	advertisement_text			VARCHAR(200),
	advertisement_image			VARCHAR(100),
	advertisement_year			INT			NOT NULL,
	advertisement_fuel			VARCHAR(20),
	advertisement_consumption	VARCHAR(20),
	advertisement_type			VARCHAR(50),
	advertisement_status		VARCHAR(20),
	advertisement_user			VARCHAR(100)
)

CREATE TABLE recensions(
	id_recension		SERIAL		PRIMARY KEY,
	user_name			VARCHAR(100),
	user_text			VARCHAR(300),
	user_rating			VARCHAR(5)
)