const dotenv = require("dotenv").config();

const { env } = process;

module.exports = {
    TOKEN: env.TOKEN,
    PGURL: env.PGURL
}