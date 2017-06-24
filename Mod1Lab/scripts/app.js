var myApp = angular.module( 'myApp', []);

myApp.controller( 'timeCtrl', function($scope){
    $scope.time = new Date();
})
