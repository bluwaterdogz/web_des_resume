app.controller("SplashCtrl",["$scope","$state",function($scope, $state){
  $scope.swipeLeft = function(){
    console.log("momomo");
    $state.go('skills');
  };
  $scope.swipeRight = function(){
    console.log("momomo");
    $state.go('skills');
  };
}]);
