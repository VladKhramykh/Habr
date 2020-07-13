const express = require("express");
const subcategoriesController = require("../controllers/subcategoriesController.js");
const subcategoriesRouter = express.Router();

subcategoriesRouter.get("/", subcategoriesController.getCategories);
subcategoriesRouter.get("/:id", subcategoriesController.getCategory);
subcategoriesRouter.post("/", subcategoriesController.addCategoy);
subcategoriesRouter.put("/:id", subcategoriesController.updateCategory);
subcategoriesRouter.delete("/:id", subcategoriesController.removeCategory);

module.exports = subcategoriesRouter;