const express = require("express");
const routes = express.Router();
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");
routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);

routes.post("/devs/:devId/dislikes", DislikeController.store);

routes.get("/", (req, res) => {
  return res.send("hello");
});

module.exports = routes;
