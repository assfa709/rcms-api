
const express = require('express');
    // const { getAllRumours } = require("../constrollers/rumorsController");
// const {getAllRumours} = require('../controllers/rumorsControllers')
rummersController = require("../../apis/controllers/rumorsControllers");
const rummersRouter = express.Router();

rummersRouter.get("/", rummersController.getAllRumours);

module.exports = rummersRouter;


