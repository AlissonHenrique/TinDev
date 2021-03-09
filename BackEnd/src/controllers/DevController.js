const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async index(req, res) {
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        // traz user que o id nao seja igual a user logado
        { _id: { $ne: user } },
        //traz user que o id nao nao esteja dentro de likes
        { _id: { $nin: loggedDev.likes } },
        //traz user que o id nao nao esteja dentro dislikes
        { _id: { $nin: loggedDev.dislikes } }
      ]
    });

    return res.json(users);
  },

  async store(req, res) {
    const { username } = req.body;

    const userExist = Dev.findOne({ user: username });

    if (userExist) {
      return res.json(userExist);
    }

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const { name, bio, avatar_url: avatar } = response.data;
    const dev = await Dev.create({ name, user: username, bio, avatar });

    return res.json(dev);
  }
};