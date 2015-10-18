app.controller('SkillsCtrl', ['SkillsService','$log', function(SkillsService,$log){
	this.collection =  SkillsService.query();
}]);
