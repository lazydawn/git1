define(['app'], function (app) {

  var injectParams = ['$scope','$location'];

  var homeController = function ( $scope,$location) {


  };

  homeController.$inject = injectParams;

  app.register.controller('homeController', homeController);

});
