app.directive('skillsInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/skillsInfo.html',

    link: function(scope){
      scope.likes = 0;

      scope.addLike = function(){
        scope.likes++;
      };
    }
  };
});
