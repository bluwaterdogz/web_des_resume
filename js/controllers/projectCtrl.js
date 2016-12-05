app.controller('ProjectCtrl', ['ProjectService', function(ProjectService){
	var self = this;
	ProjectService.async().then(
		function(a, d){
			console.log(a)
			self.projects = a.data;
		}
	).catch(function(){
			alert("error :(");
	});
}]);
