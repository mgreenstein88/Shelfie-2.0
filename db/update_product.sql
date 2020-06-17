UPDATE products
SET name = $1, price = $2, image = $3,
WHERE id = $4;