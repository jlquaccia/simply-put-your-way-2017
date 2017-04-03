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
        PDK.request('/v1/boards/' + id + '/pins/', 'GET', {fields: 'id,link,url,creator,board,created_at,note,color,counts,media,attribution,image,metadata'}, function (response) {
          if (response) {
            resolve(response);
          }

          reject();
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