app.factory('SkillsService', ['$resource', function ($resource) {
	return $resource('json/skills.json');
}]);
