const express = require("express");
const usersController = require("../controllers/usersController.js");
const usersRouter = express.Router();

usersRouter.get("/", usersController.getUsers);
usersRouter.get("/activate", usersController.activateUser);
usersRouter.get("/:id", usersController.getUser);
usersRouter.post("/", usersController.addUser);
usersRouter.put("/:id", usersController.updateUser);
usersRouter.delete("/:id", usersController.removeUser);

module.exports = usersRouter;