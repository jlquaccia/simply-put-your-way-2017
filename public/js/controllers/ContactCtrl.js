angular
  .module('simply-put-your-way')
  .controller('ContactCtrl', ['$scope', '$http', '$mdToast', 'parallaxHelper', function ($scope, $http, $mdToast, parallaxHelper) {
    // preloading header image
    $('<img/>').attr('src', '../images/new/Fun Old Kitchen Items.jpg').on('load', function () {
      $(this).remove();
      $('#contact .headerImage').css('background-image', 'url("../images/new/Fun Old Kitchen Items.jpg"), url("../images/subtle patterns/crossword.png")');
    });

    $scope.cf = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    };

    // parallax
    $scope.background = parallaxHelper.createAnimator(-0.3,150,0);

    // send message
    $scope.sendMessage = function (form) {
      if (form.$valid) {
        var data = ({
          firstName: this.cf.firstName,
          lastName: this.cf.lastName,
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
                  .content('Thanks ' + data.data.firstName + ', message sent!')
                  .hideDelay(4000);

                $mdToast.show(successMsg);
                
                $scope.cf = {
                  firstName: '',
                  lastName: '',
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

              // error flash message
              var errorMsg = $mdToast.simple()
                .content('something went wrong..')
                .hideDelay(4000);

              $mdToast.show(errorMsg);
            }
          );
      } else {
        console.log('form is not valid');
      }
    };
  }]);