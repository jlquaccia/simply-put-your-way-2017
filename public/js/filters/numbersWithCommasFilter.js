(function () {
  angular
    .module('simply-put-your-way')
    .filter('numbersWithCommas', [function () {
      return function (num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      };
    }]);
})();