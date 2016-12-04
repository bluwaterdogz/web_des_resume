app.directive("scroll", function($window, $state){
  return function(scope, element, attrs){
    $scope.lastScrollTop = 0;
    $scope.direction = "";
    $scope.transitioned = false;
      angular.element($window).bind("scroll", function(){
        $scope.st = $window.pageYOffset;
        if($scope.st > $scope.lastScrollTop){
          $scope.transitioned = true;
          $state.go("intro");
        }
        if($scope.transitioned && $scope.st === 0){
          $state.go("splash");
          $scope.transitioned = false;
        }
      });
  };
});
