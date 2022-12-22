//create user
export const CREATEUSER =
  'INSERT INTO users (first_name, last_name, email, password, phone_number, jop, admin_flag, user_status, created_date, updated_date) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id, first_name, last_name, email, job, admin_flag, user_status, updated_date, created_date'

//getAll Users
export const GETMANYUSERS =
  'SELECT id, first_name, last_name, email, phone_number, job, admin_flag, user_status, created_date, updated_date FROM users'

//getOne User
export const GETONEUSER =
  'SELECT id, first_name, last_name, email, phone_number, job, admin_flag, user_status, created_date, updated_date FROM users WHERE id=($1)'

//search for User
export const SEARCHFORUSER =
  'SELECT id, first_name, last_name, email, phone_number, job, admin_flag, user_status, created_date, updated_date FROM users WHERE first_name=($1) OR last_name=($2) OR email=($3)'

//Update User
export const UPDATEUSER =
  'UPDATE users SET first_name=($2), last_name=($3), email=($4), password=($5), phone_number=($6), job=($7), admin_flag=($8), user_status=($9), updated_date=($10) WHERE id=($1) RETURNING id, first_name, last_name, email, phone_number, admin_flag, updated_date, created_date'

//Delete User
export const SELECTSTATUS = 'SELECT user_status FROM users WHERE id=($1)'

export const DELETEUSER =
  'UPDATE users SET user_status=($2), updated_date=($3) WHERE id=($1) RETURNING *'

export const UPDATEBOOKAFTERDELETEUSER =
  'UPDATE books SET currrent_user=($2), old_user=($1) WHERE currrent_user=($1)'

//Sign in
export const AUTHANTICATE = 'SELECT password FROM users WHERE email=($1)'

export const AUTHANTICATE2 =
  'SELECT id, first_name, last_name, email, phone_number, job, admin_flag, user_status FROM users WHERE email=($1)'

//getAll Deleted Users
export const GETALLUNAVILABLEUSERS = `SELECT * FROM users WHERE user_status = 'NOT AVILABLE'`
