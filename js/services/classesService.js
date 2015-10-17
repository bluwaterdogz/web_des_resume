app.factory('ClassesService', ['$resource' function ($resource) {

	var classes = $resource("json/classes.json");

	return {

		all: function(){
			return classes;
		},
		ret1: function(){
			return classes.slice(0,2);
		},
		ret2: function(){
			return classes.slice(2,4);
		},
		ret3: function(){
			return classes.slice(4,6);
		}
	};
}]);
