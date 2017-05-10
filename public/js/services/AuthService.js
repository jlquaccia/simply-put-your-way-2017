angular
  .module('simply-put-your-way')
  .factory('Auth', ['$http', function ($http) {
    var api = {
      register: register
    };

    return api;

    function register (user) {
      return $http.post('/api/register', user);
    }
  }]);