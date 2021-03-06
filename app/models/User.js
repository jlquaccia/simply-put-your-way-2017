var mongoose = require('mongoose');

module.exports = function () {
  var UserSchema = new mongoose.Schema({
    username: String,
    password: String
  }, {collection: 'user'});

  var UserModel = mongoose.model('UserModel', UserSchema);

  var api = {
    findUserByUsername: findUserByUsername,
    createUser: createUser,
    findUserById: findUserById,
    findUserByCredentials: findUserByCredentials
  };

  return api;

  function findUserByUsername (username) {
    return UserModel.findOne({username: username});
  }

  function createUser (user) {
    return UserModel.create(user);
  }

  function findUserById (userId) {
    return UserModel.findById(userId);
  }

  function findUserByCredentials (credentials) {
    return UserModel.findOne({username: credentials.username, password: credentials.password});
  }
};