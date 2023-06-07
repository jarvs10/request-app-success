import mysql from 'mysql'

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "cruddatabase",
});

export const executeQuery = ({ query, values }) => {
  try {
    const results = db.query(query, values);
    db.end();
    return results
  } catch (error) {
    console.log(error);
  }
}