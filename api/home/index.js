const express = require("express");

const homeController = require("../../controllers/home/home.js");

const homeRouter = express.Router();

homeRouter.get("/", homeController.getHomePage);
homeRouter.get("/manageAccount", homeController.getManageAccount)
homeRouter.get("/manageAccountDashboard", homeController.getManageAccountDashboard)
homeRouter.get("/historyPayment", homeController.getHistoryPayment)
module.exports = homeRouter;
