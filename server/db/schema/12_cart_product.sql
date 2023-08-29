DROP TABLE IF EXISTS cart_product CASCADE;
CREATE TABLE cart_product (
  id SERIAL PRIMARY KEY,
  cart_id INT NOT NULL REFERENCES cart(id),
  product_id INT NOT NULL REFERENCES products(id),
  quantity INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
