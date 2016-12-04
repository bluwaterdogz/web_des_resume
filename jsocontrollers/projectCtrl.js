app.controller('ProjectCtrl', ['ProjectService', function(ProjectService){
	this.projects =  ProjectService.async();
}]);
