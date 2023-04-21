import db from 'mysql2/promise';

export default db.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306,
  database: 'TypeScriptExpress',
});