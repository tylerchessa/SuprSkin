DROP TABLE IF EXISTS contact_info CASCADE;
CREATE TABLE contact_info (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  phone_number VARCHAR(20) NOT NULL,
  street_address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  postal VARCHAR(255) NOT NULL
);