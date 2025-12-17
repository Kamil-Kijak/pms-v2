
const mysql = require("mysql2/promise");
const config = require("./config");


const pool = mysql.createPool({
  host:config.dbHost,
  user:config.dbUser,
  password:config.dbPassword,
});

const createDatabase = async () => {
  try {
    const conn = await pool.getConnection();
    await conn.ping();
    conn.release();
    const result = await pool.execute("SHOW DATABASES")
    if (result[0].some((obj) => obj["Database"] == config.dbName)) {
      console.log("Creation of database skipped")
    } else {
      await pool.execute(`CREATE DATABASE IF NOT EXISTS ${config.dbName} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`)
      console.log("database created successfully")
    }
  } catch (err) {
    console.log(err)
    console.error("MYSQL connection error:", err.code);
    process.exit(1);
  }

}

module.exports = createDatabase;