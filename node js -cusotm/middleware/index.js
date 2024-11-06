function reqTime(req, res, next) {
  console.log("adding middle Ware");
  req.time = Date.now();
  next();
}

module.exports = reqTime;
