
require("dotenv").config();
const config = require("./util/config");

const path = require("path");
const express = require("express");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");


const createDatabase = require("./util/createDatabase");


const main = async () => {
    await createDatabase();
    const sequelize = require("./util/db");

    const app = express();
    // midlewares
    const limiter = rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 200,
    });
    app.use(limiter);
    app.use(express.json());
    app.use(cookieParser());
    if(!config.development) {
        app.use(express.static(path.join(__dirname, "app", "dist")));
    }

    // routes
    

    sequelize.sync({force:false});

};

main();