(function () {
  angular
    .module('simply-put-your-way')
    .factory('LocalStorage', [function () {
      var api = {
        set: set,
        get: get
      };

      return api;

      function set (key, value) {
        localStorage.setItem(key, value);
      }

      function get (key) {
        return localStorage.getItem(key);
      }
    }]);
})();