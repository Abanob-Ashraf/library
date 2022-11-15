export const createShelf =
  'INSERT INTO shelfs (shelf_number, shelf_name, block_id, created_date, updated_date) VALUES($1, $2, $3, $4, $5) RETURNING *'

export const getAllShelfs = 'SELECT * FROM shelfs'

export const getSingleShelfById = 'SELECT * FROM shelfs WHERE id=($1);'

export const updateShelf =
  'UPDATE shelfs SET shelf_number=($2), shelf_name=($3), block_id=($4), updated_date=($5) WHERE id=($1) RETURNING *'

export const deleteShelf = 'DELETE FROM shelfs WHERE id=($1) RETURNING *'