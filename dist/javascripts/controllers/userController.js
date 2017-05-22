define(['app'], function (app) {

  var injectParams = ['$scope','$http','authenticationService'];



  var userController = function ( $scope,$http,authenticationService) {
    var vm = this;

    $scope.isShowcat = false;
    $scope.isShowbutton = true;
    $scope.isOn = true;
    $scope.isOff = false;

    function getCatdata(){
      $http.get('/api/cat',
      {
        headers:{
          Authorization:'Bearer '+authenticationService.getToken()
        }
      }).then(function(response){
        $scope.cats = response.data.cats;
      });
    }

    function getFlapdata(){
      $http.get('/api/catflap',
      {
        headers:{
          Authorization:'Bearer '+authenticationService.getToken()
        }
      }).then(function(response){
        $scope.flaps=response.data.catFlaps;
      });

      // if($scope.flaps.power == "on"){
      //   $scope.isOn = true;
      //   $scope.isOff = false;
      // }
    }

    getCatdata();
    getFlapdata();

    $scope.addCat = function(){
      $http.post('/api/cat',{
        'name':vm.cat,
        'rfid':vm.rfid
      },
      {
        headers:{
          Authorization:'Bearer '+authenticationService.getToken()
        }
      }
      ).then(function(resp){
        if(resp.success){
          alert("Success");
        }
      });
      getCatdata();
    };

    $scope.delCat = function(event){
      var id = event.target.getAttribute("id");
      $http.delete('/api/cat/'+id,
        {
          headers:{
            Authorization:'Bearer '+authenticationService.getToken()
          }
        }).then(function(resp){
          if(resp.success){
            alert("Success");
          }
      });
      getCatdata();
    };

    $scope.flapOn = function(){
      $scope.isOn = true;
      $scope.isOff = false;
    }

    $scope.flapOff = function(){
      $scope.isOn = false;
      $scope.isOff = true;
    }

    $scope.showCats = function(){
      if($scope.isShowcat == true){
        $scope.isShowcat = false;
      }else if ($scope.isShowcat == false) {
        $scope.isShowcat = true;
      }
    };

    $scope.showButton = function(){
      $scope.isShowbutton = true;
    }

    $scope.hideButton = function(){
      $scope.isShowbutton = false;
    }
  };

  userController.$inject = injectParams;

  app.register.controller('userController', userController);

});
