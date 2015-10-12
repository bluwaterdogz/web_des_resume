app.factory('gitHubService', ['$http', function($http){
	
	var myGitHubRepos;
	
	$http({

		method:'GET',
		url: "https://api.github.com/users/bluwaterdogz/repos"

	}).then(function successCallback(response){
		myGitHubRepos = response;
	},function errorCallback(response){
		$log.log(response);
		alert(response);
	});

	return function name(){

		all:function(){
			return myGitHubRepos;
		}
	};

}]);
