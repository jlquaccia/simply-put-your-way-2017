module.exports = function () {
  var api = {
    authorized: authorized
  };

  return api;

  function authorized (req, res, next) {
    if (!req.isAuthenticated()) {
      res.send(401);
    } else {
      next();
    }
  }
};