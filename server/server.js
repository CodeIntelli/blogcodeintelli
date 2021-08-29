import express from "express";
import db from "./database";
import cors from "cors";
import bodyParser from "body-parser";
import Routes from "./routes";
const app = express();
require("dotenv").config({ path: "./config.env" });
let PORT = process.env.PORT || 9000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);
app.listen(PORT, () => {
  console.log("app connected successfully");
});
