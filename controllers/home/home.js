const getHousesService = require("../../services/houses/getHouses.js");

const getHomePage = async (req, res, next) => {
  try {
    const metadata = {
      title: "Trang chủ",
    };

    const ownedHouses = await getHousesService.getHousesByOwner(
      req.session.userId,
      {
        limit: 6,
        populate: ["images"],
      },
    );

    const featuredHouses = await getHousesService.getFeaturedHouses({
      limit: 6,
      populate: ["images"],
    });

    const latestHouses = await getHousesService.getHouses({
      limit: 6,
      populate: ["images"],
    });

    return res.render("pages/thumbnail", {
      metadata,
      ownedHouses,
      featuredHouses,
      latestHouses,
    });
  } catch (error) {
    return next(error);
  }
};

const getManageAccount = async(req, res, next) => {
  try {
    return res.render('./pages/manageAccount');
  } catch (error) {
    return next(error);
  }
  
}

const getManageAccountDashboard = async(req, res, next) =>{
  try {
    return res.render('./pages/dashboardAdmin');
  } catch (error) {
    return next(error)
  }
}

const getHistoryPayment = async(req, res, next) =>{
  try {
    return res.send(200);
  } catch (error) {
    return next(error)
  }
}
module.exports = {
  getHomePage,
  getManageAccount,
  getManageAccountDashboard,
  getHistoryPayment
};
