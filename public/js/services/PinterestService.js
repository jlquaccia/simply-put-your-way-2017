angular
  .module('simply-put-your-way')
  .factory('Pinterest', ['$q', function ($q) {
    PDK.init({appId: "4892673736834035409", cookie: true});

    function login (callback) {
      PDK.login({scope: 'read_public'}, callback);
    }

    function logout () {
      PDK.logout();
      console.log('logged out');
    }

    function isLoggedIn () {
      return !!PDK.getSession();
    }

    function getBoards (callback) {
      PDK.me('boards', {fields: 'id,name,url,description,creator,created_at,counts,image'}, callback);
    }

    function getBoardPins (id) {
      // wrap request in an angular promise so you make sure the response has resolved before passing it over (ex. to a controller etc.)
      return $q(function (resolve, reject) {
        // PDK.request('/v1/boards/' + id + '/pins/', 'GET', {fields: 'id,link,url,creator,board,created_at,note,color,counts,media,attribution,image,metadata'}, function (response) {
        //   if (response) {
        //     resolve(response);
        //   }

        //   reject();
        // });

        $(document).ready(function () {
          $.ajax({
            url: 'https://api.pinterest.com/v1/boards/' + id + '/pins/?access_token=AdF_DZL-WRyxl7murQoU0aSTfDQeFTspRW447AND5kZqw0ApbwAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cboard%2Cimage%2Ccreator%2Ccreated_at%2Ccolor%2Ccounts%2Cmedia%2Cattribution%2Cmetadata',
            type: 'GET',
            data: {},
            datatype: 'json',
            success: function (response) {
              resolve(response);
            },
            error: function (err) {
              console.log(err);
              reject();
            }
          });
        });
      });
    }

    return {
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn,
      getBoards: getBoards,
      getBoardPins: getBoardPins
    };
  }]);
