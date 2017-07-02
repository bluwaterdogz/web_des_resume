var app = angular.module('ResumeApp', ['ngResource', 'ui.router', 'ngAnimate']);

$(document).ready(function($) {

	$(".project-title-cont li").mouseenter(function() {
		var newImg = $(this).index();
    console.log(newImg);
		$(".img-over").addClass("transparent");
		$(".img-over").eq(newImg).removeClass("transparent");
	});

	$('a.backToTop').click(function (e) {
    e.preventDefault();
    $(document.body).animate({scrollTop: 0}, 2000, 'swing');
  });

});

app.controller('ExperienceCtrl', ['ClassesService', function(ClassesService){
	this.experiences = ClassesService.query();
}]);

// app.controller('GitCtrl', function (gitHubService) {
// 	this.myGitRepos = gitHubService.all();
// 	$log.log(myGitRepos);
// });

app.controller('ProjectCtrl', ['ProjectService', function(ProjectService){
	var self = this;
	ProjectService.async().then(
		function(a, d){
			self.projects = a.data;
		}
	).catch(function(){
			alert("error :(");
	});
}]);

app.controller('SkillsCtrl', ['SkillsService','$log', function(SkillsService,$log){
	// var mo = SkillsService.query();
	var self = this;
	clearData = function() {
    self.skillTypes = {};
  };
	getData = function() {
		SkillsService.getSkillsAsync().then(function(d){self.skillTypes =  d.data;});
	};
	getData();
}]);

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

// three column filter
app.filter('expFilter', function() {
// pass through inputs as array, obj in index, then values from ng-repeat
  return function(inputs, value) {
    // array to store filtered results
    var output = [];
    if(inputs.length){
      angular.forEach(inputs, function(input) {
        if(input.id !== null){
          if(input.id % 3 === value){
            output.push(input);
          }
        }else{
          //console.log("No Id for "+input.title);
        }
      });
    }else{
      //console.log("No data");
    }
    return output;
  };
});

app.directive('expInfo', [function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/experienceInfo.html',

	link: function(scope){
		scope.unhidden = true;
		scope.anim = function(){
			if(scope.hidden){
				$('.expbox').css({
					height: 'auto',
					overflow: 'visible'
				});
				scope.hidden = false;
			}
			else{
				$('.expbox').css({
					height: 'auto',
					overflow: 'visible'
				});
				scope.hidden = true;

			}
		};
	}
};
}]);

app.directive('navBar', function(){
  return {
    restrict   : "E",
    templateUrl: 'js/directives/navBar.html'
  };
});

// // <!-- In progress -->
// app.directive('projects',function(){
//   return {
//     restrict:"E",
//     templateUrl:'js/directives/projects.html'
//   };
// });

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

app.directive('skills',function(){
  return {
    restrict:"E",
    templateUrl:'js/directives/skills.html'
  };
});

app.config(function($stateProvider, $urlRouterProvider){
  var BASE_PATH = "/web_des_resume";
  //  var BASE_PATH = ""; // for testing:
  $urlRouterProvider.otherwise(BASE_PATH);
  $stateProvider
    .state('intro',{
      url:BASE_PATH+"/intro",
      templateUrl:'/views/intro.html'
    })
    .state('splash',{
      url:BASE_PATH,
      templateUrl:BASE_PATH+'/views/intro.html',
      controller:'SplashCtrl'
    })
    .state('skills',{
        url:BASE_PATH+"/skills",
        templateUrl:BASE_PATH+'/views/skills.html'
    })
    .state('about',{
        url:BASE_PATH+"/about",
        templateUrl:BASE_PATH+'/views/about.html'
    })
    .state('experiences',{
        url: BASE_PATH+"/experiences",
        views: {
            '': { templateUrl:BASE_PATH+'/views/experiences.html'},
            'work@experiences': { templateUrl: BASE_PATH+'/views/work.html'},
            'projects@experiences': {
               templateUrl: BASE_PATH+'/views/projects.html',
               controller:'ProjectCtrl'
             }
        }
    });
});

app.factory('ClassesService', ['$resource', function ($resource) {
	return $resource('json/classes.json');
}]);

// app.factory('gitHubService', ['$http', function($http){
// 	var myGitHubRepos;
// 	$http({
// 		method:'GET',
// 		url: "https://api.github.com/users/bluwaterdogz/repos"
// 	}).then(function successCallback(response){
// 		myGitHubRepos = response;
// 	},function errorCallback(response){
// 		$log.log(response);
// 		alert(response);
// 	});
// 	return function name(){
// 		var all = function(){
// 			return myGitHubRepos;
// 		}
// 	};
// }]);

app.factory('ProjectService', ['$http', function ($http) {
	var serv = {
		async: function(){
			return $http({ method: 'GET', url: 'json/projects.json'});
		}
 	};

 return serv;
	// return $resource('json/projects.json');
}]);

app.factory('SkillsService', ['$resource','$http', function ($resource,$http) {
	var serv = {
		// getLikesAsync: function(){return $http({ method: 'GET', url: 'http://127.0.0.1:8000/resume_api/default/get_likes'});},
		getSkillsAsync: function(){return $http({ method: 'GET', url: 'json/skills.json'});}
 	};
 return serv;
}]);
