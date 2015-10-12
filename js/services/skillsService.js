app.factory('SkillsService', [function () {
	
	var skills = [
		{
			title:"HTML5/CSS",
			langLvl:4,
			description:"Web-Publishing 1, 2 & 30 Days to Learn HTML & CSS",
			likes:0
		},
		{
			title:"Javascript/Jquery/AJAX",
			langLvl:3,
			description:"Intro to Programming with Javascript, Code Academy: Javascript & AngularJS, 30 Days to Learn jQuery, CodeSchool AngularJS, Scotch.io Meteor.js Tutorials & Eloquent Javasctipt",
			likes:0
		},
		{
			title:"Java/Swift",
			langLvl:2,
			description:"Introduction to Java using games and simulations, Mobile Programming: Android & iOS, Java Programming",
			likes:0
		},
		{
			title:"Python",
			langLvl:2,
			description:"Web Applications, Code Academy: Python",
			likes:0
		},
		{
			title:"PHP/SQL",
			langLvl:1,
			description:"Introduction to Programming Database-Driven Websites With PHP",
			likes:0
		}
	];
	
	return {
		all: function(){
			return skills;
		}
	};
}]);