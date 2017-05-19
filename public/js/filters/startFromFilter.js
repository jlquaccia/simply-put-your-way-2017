(function () {
  angular
    .module('simply-put-your-way')
    .filter('startFrom', function () {
      return function (input, start) {
        start = +start;
        return input.slice(start);
      };
    });
})();