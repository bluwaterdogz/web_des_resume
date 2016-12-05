app.factory('ProjectService', ['$http', function ($http) {
	var serv = {
		async: function(){
			return $http({ method: 'GET', url: 'json/projects.json'});
		}
 	};

 return serv;
	// return $resource('json/projects.json');
}]);
