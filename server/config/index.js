require("dotenv").config({ path: "./config.env" });

export const { PORT, DB_URL } = process.env;
