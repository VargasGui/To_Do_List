const express = require("express");
const path = require("path");
require("dotenv").config()

const routes = require("./routes/routes.js");
const connectToDb = require("./database/db.js")

connectToDb()
const app = express()
const port = process.env.PORT;

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes)

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})
