app.controller('menuCtrl', [ "$scope",
  function($scope){
    $scope.model = { title: 'Our Menu' };
    $scope.changeMainDish = function(item){
      $scope.model.mainDish = item;
    }
  }
]);
