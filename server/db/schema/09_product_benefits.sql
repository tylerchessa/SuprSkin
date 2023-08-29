DROP TABLE IF EXISTS product_benefits CASCADE;
CREATE TABLE product_benefits (
  id SERIAL PRIMARY KEY NOT NULL,
  product_id INT REFERENCES products(id),
  benefit_description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
