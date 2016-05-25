var app = angular.module('MeanAPI', []);
app.controller('MainController', ['$scope', '$http', function($scope, $http){
  $scope.groceries = [];

  $http.get('/api/data').then(function(response){
    $scope.groceries = response.data.items;
  });


  $scope.clearList = function(){
    for(var i=0; i< $scope.groceries.length; i++){
      if($scope.groceries[i].retrieved){
        $scope.deleteItem( $scope.groceries[i] );
      }
    }
  }

  $scope.newList = function(){
    for(var i=0; i<$scope.groceries.length; i++){
      $scope.deleteItem( $scope.groceries[i] );
    }
  }

  $scope.createNew = function( item ){
    $http.post('/api/data', item ).then(function(response){
      $scope.groceries.push( response.data.item );
      $scope.item.food = '';
      $scope.item.price = null ;
    });
  }

  $scope.updateItem = function( item ){
    var update = item;
    update.retrieved = !update.retrieved
    $http.put('/api/data/'+item._id, update ).then( function(response){
      console.log( response.data.item );
    })
  }

  $scope.deleteItem = function( item ){
    $http.delete('/api/data/'+item._id ).then(function(response){
      $http.get('/api/data').then(function(response){
        $scope.groceries = response.data.items;
      });
    });
  }
}]);
