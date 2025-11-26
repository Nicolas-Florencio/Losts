import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "losts",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();  // <- ESSENCIAL


export default pool;