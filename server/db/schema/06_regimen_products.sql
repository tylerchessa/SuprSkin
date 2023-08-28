DROP TABLE IF EXISTS regimen_products CASCADE;
CREATE TABLE regimen_products (
    id SERIAL PRIMARY KEY,
    regimen_id INT REFERENCES regimens(id) ON DELETE CASCADE,
    product_id INT REFERENCES products(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);