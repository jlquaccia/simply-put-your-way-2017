angular
  .module('simply-put-your-way')
  .controller('ContactCtrl', ['$scope', '$http', 'parallaxHelper', function ($scope, $http, parallaxHelper) {
    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);

    // send message
    $scope.sendMessage = function (form) {
      if (form.$valid) {
        // console.log('form is valid');
        
        var data = ({
          name: this.cf.name,
          email: this.cf.email,
          subject: this.cf.subject,
          message: this.cf.message
        });

        // console.log(data);

        $http.post('/contact-form', data)
          .then(
            function (data, status, headers, config) {
              // show material design toast here on success
              console.log('success');
            },
            function (data, status, headers, config) {
              console.log('something went wrong');
            }
          );
      } else {
        console.log('form is not valid');
      }
    };
  }]);