DROP TABLE IF EXISTS product_photos CASCADE;
CREATE TABLE product_photos (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INT REFERENCES products(id),
  photo_url VARCHAR(255) NOT NULL,
  is_main_photo BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
