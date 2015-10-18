app.directive('expInfo', [function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/experienceInfo.html',
    link: function(scope) {
      scope.unhidden = true;
      scope.anim = function() {
        if (scope.hidden) {
          $('.expbox').css({
            height: 'auto',
            overflow: 'visible'
          });
          scope.hidden = false;
        } else {
          $('.expbox').css({
            height: 'auto',
            overflow: 'visible'
          });
          scope.hidden = true;
        }
      }
    }
  }
}]);
