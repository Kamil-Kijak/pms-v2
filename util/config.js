

module.exports = {
    dbName:process.env.DB_NAME || "pms",
    dbHost:process.env.DB_HOST || "localhost",
    dbUser:process.env.DB_USER || "root",
    dbPassword:process.env.DB_PASSWORD || "",
    development:Number(process.env.DEVELOPMENT)
};