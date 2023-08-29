DROP TABLE IF EXISTS product_images CASCADE;
CREATE TABLE product_images (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INT REFERENCES products(id),
  image_url VARCHAR(255) NOT NULL,
  is_main_photo BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
