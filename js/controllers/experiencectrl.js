app.controller('ExperienceCtrl', ['ClassesService', function(ClassesService){
	
	this.experiences = ClassesService.query();
}]);
