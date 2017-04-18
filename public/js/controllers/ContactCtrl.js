angular
  .module('simply-put-your-way')
  .controller('ContactCtrl', ['$scope', '$http', '$mdToast', 'parallaxHelper', function ($scope, $http, $mdToast, parallaxHelper) {
    $scope.cf = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);

    // success flash message
    var errorMsg = $mdToast.simple()
      .content('something went wrong..')
      .hideDelay(4000);

    // send message
    $scope.sendMessage = function (form) {
      if (form.$valid) {
        var data = ({
          name: this.cf.name,
          email: this.cf.email,
          subject: this.cf.subject,
          message: this.cf.message
        });

        $http.post('/api/contact-form', data)
          .then(
            function (data, status, headers, config) {
              // show material design toast here on success
              console.log('success');
              console.log('success: ', data);

              if (data.data.errors) {
                $scope.errors = data.data.errors;
              } else {
                $scope.errors = false;

                // success flash message
                var successMsg = $mdToast.simple()
                  .content('thanks ' + data.data.name + '! message sent. we\'ll be in touch!')
                  .hideDelay(4000);

                $mdToast.show(successMsg);
                
                $scope.cf = {
                  name: '',
                  email: '',
                  subject: '',
                  message: ''
                };

                form.$setPristine();
                form.$setUntouched();
              }
            },
            function (data, status, headers, config) {
              console.log('something went wrong');
              console.log('error: ', data);

              $mdToast.show(errorMsg);
            }
          );
      } else {
        console.log('form is not valid');
      }
    };
  }]);