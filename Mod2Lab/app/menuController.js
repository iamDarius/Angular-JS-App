app.controller('menuCtrl', [ "$scope",
  function($scope){
    $scope.model = { title: 'Our Menu' };
    $scope.$watch('model.mainDish.name', function(newValue, oldValue){
      if(newValue === 'BBQ Chicken Pizza'){
        //alert('You have selected the BBQ Chicken Pizza!');
      }
    })

    $scope.changeMainDish = function(item){
      $scope.model.mainDish = {
        name: item,
       price: function() {
          if( item === 'Cheese Pizza'){
            return price = "$9.99";
            console.log('it worked');
          }
          else if( item === 'Pepperoni Pizza'){
            return price = "$11.99";
          }
          else if( item === 'Magherita Pizza'){
            return price = "$12.99";
          }
          else if( item === 'BBQ Chicken Pizza'){
            return price = "$12.99";
          }
          else if ( item === 'Combo Pizza'){
            return price = "$15.99";
          }
          else {
            return price = "$0.00";
          }

        }
      }
    }
  }
]);
