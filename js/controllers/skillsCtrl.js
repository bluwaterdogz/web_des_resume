app.controller('SkillsCtrl', ['SkillsService','$log', function(SkillsService,$log){
	// var mo = SkillsService.query();
	var self = this;
	clearData = function() {
    self.skillTypes = {};
  };
	getData = function() {
		SkillsService.getSkillsAsync().then(function(d){self.skillTypes =  d.data;});
	};
	getData();
}]);
