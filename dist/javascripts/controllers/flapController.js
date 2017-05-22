define(['app'], function (app) {

  var injectParams = ['$scope','$http','authenticationService'];

  var flapController = function ($scope,$http, authenticationService) {
    var vm = this;
    $scope.allowed = "checked";
    function getCat(){
      $http.get('/api/cat',
      {
        headers:{
          Authorization:'Bearer '+authenticationService.getToken()
        }
      }).then(function(response){
        $scope.cats=response.data.cats;
      });
    }

    getCat();

    $scope.updateCat = function($event,id){

    }
  };

  flapController.$inject = injectParams;

  app.register.controller('flapController', flapController);

});
