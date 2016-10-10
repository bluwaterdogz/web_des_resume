app.controller('SkillsCtrl', ['SkillsService','$log', function(SkillsService,$log){
	// var mo = SkillsService.query();
	clearData = function() {
    this.collection = {};
  };
	var collection;
	getData = function() {
		SkillsService.async().then(function(d) {
			this.collection =  d.data.likes_dict;

		});
	};
	getData();
	console.log(collection);
	// this.collection ={momo:'momo'};
}]);
