define(['app'], function (app) {

  var injectParams = ['$scope','$location'];

  var downloadController = function ( $scope,$location) {

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;

    var slides = $scope.slides = [];
    var currIndex = 0;
    slides.push({image: 'images/homepage.jpg', id: '0'});
    slides.push({image: 'images/timg.jpg', id: '1'});
    slides.push({image: 'images/timg-2.jpg', id: '2'});



  };

  downloadController.$inject = injectParams;

  app.register.controller('downloadController', downloadController);

});
