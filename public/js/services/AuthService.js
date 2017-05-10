angular
  .module('simply-put-your-way')
  .factory('Auth', ['$http', function ($http) {
    var api = {
      register: register,
      logout: logout,
      login: login
    };

    return api;

    function register (user) {
      return $http.post('/api/register', user);
    }

    function logout () {
      return $http.post('/api/logout');
    }

    function login (user) {
      return $http.post('/api/login', user);
    }
  }]);