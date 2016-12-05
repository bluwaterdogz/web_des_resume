app.factory('SkillsService', ['$resource','$http', function ($resource,$http) {
	var serv = {
		// getLikesAsync: function(){return $http({ method: 'GET', url: 'http://127.0.0.1:8000/resume_api/default/get_likes'});},
		getSkillsAsync: function(){return $http({ method: 'GET', url: 'json/skills.json'});}
 	};
 return serv;
}]);
