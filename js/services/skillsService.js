app.factory('SkillsService', ['$resource','$http', function ($resource,$http) {
	var serv = {
		async: function(){return $http({ method: 'GET', url: 'http://127.0.0.1:8000/resume_api/default/get_likes'});}
 	};
 return serv;
}]);
