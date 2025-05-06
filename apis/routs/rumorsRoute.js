
const express = require('express');
    // const { getAllRumours } = require("../constrollers/rumorsController");
// const {getAllRumours} = require('../controllers/rumorsControllers')
rumorsController = require("../../apis/controllers/rumorsControllers");
const rumorsRouter = express.Router();

rumorsRouter.get("/", rumorsController.getAllRumours);
rumorsRouter.get("/:id", rumorsController.getRumorsById);

module.exports = rumorsRouter;


