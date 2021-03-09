const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rotues = require("./routes");
const server = express();
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-aifdz.mongodb.net/omnistack8?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(rotues);

server.listen(3001);
