app.controller('ExperienceCtrl', ['ClassesService', function(ClassesService){

	this.experiences1 = ClassesService.ret1();
	this.experiences2 = ClassesService.ret2();
	this.experiences3 = ClassesService.ret3();

}]);