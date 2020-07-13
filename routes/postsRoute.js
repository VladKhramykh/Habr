const express = require("express");
const postsController = require("../controllers/postsController.js");
const postsRouter = express.Router();

postsRouter.get("/", postsController.getPosts);
postsRouter.get("/:id", postsController.getPost);
postsRouter.patch('/', postsController.setStatusPost);
postsRouter.post("/", postsController.addPost);
postsRouter.put("/:id", postsController.updatePost);
postsRouter.delete("/:id", postsController.removePost);

module.exports = postsRouter;