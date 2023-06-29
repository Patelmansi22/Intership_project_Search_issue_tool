const jwt = require("jsonwebtoken");

/**
 * Maneger Middleware for Verfiy User Is Admin Or not...
 * @author Patel Ayush
 * @param {String} req
 * @param {String} res
 * @param {String} next
 */
const verifyManeger = async (req, res, next) => {
  //   console.log(req.user, "here");
  const userRole = req.user[0].userRole;
  if (userRole) {
    if (userRole == "Admin" || userRole=="Manager") {
      next();
    } else {
      res
        .status(401)
        .send({ status: "Fail", message: "You dont have access of It ...." });
    }
  } else {
    res.status(400).send({ status: "Fail", message: "Invadali Access....." });
  }
  //   next();
};
module.exports = verifyManeger;
