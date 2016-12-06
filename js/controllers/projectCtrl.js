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
