const express = require("express");
const categoriesController = require("../controllers/categoriesController.js");
const categoriesRouter = express.Router();

categoriesRouter.get("/", categoriesController.getCategories);
categoriesRouter.get("/sub", categoriesController.getCategoriesAndSub);
categoriesRouter.get("/:id", categoriesController.getCategory);
categoriesRouter.post("/", categoriesController.addCategoy);
categoriesRouter.put("/:id", categoriesController.updateCategory);
categoriesRouter.delete("/:id", categoriesController.deleteById);

module.exports = categoriesRouter;