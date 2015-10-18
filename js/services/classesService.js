app.factory('ClassesService', ['$resource', function ($resource) {
	return $resource('json/classes.json');
}]);
