const express = require("express");
const bodyParser = require("body-parser");
const userAPI = require("./controllers/userAPI");
const postAPI = require("./controllers/postAPI");
var cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const mongoose = require("./db_connect");

app.use("/u", userAPI);
app.use("/posts", postAPI);

app.listen(4500, () => console.log("EXPRESS Server Started at Port No: 4500"));
