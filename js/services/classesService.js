app.factory('ClassesService', ['$resource' function ($resource) {

	var classes = [
  {
    title:"Web Applications",
    date:"Fall 2015",
    description:"Web Application development using Web2Py and angularJS.",
    skill:"❤❤❤"
  },
  {
    title:"WebPublishing 1 & 2",
    date:"Spring 2015",
    description:"First course in web publishing series based on HTML and CSS",
    skill:"❤❤❤"
  },
  {
    title:"Javascript",
    date:"Winter 2015",
    description:"Introduction to browser based Javascript.",
    skill:"❤❤❤"
  },
  {
    title:"Mobile Programming: IOS and Android",
    date:"Spring 2015",
    skill:"❤",
    description:"Mobile app development using Android studio and Xcode with either Java or Swift Programming languages."
  },
  {
    title:"Programming Database Driven Websites with PHP",
    date:"Spring 2015",
    description:"Introduction to PHP server-side programming language as an OOP and the implementation of SQL into websites programmed with it.",
    skill:"❤❤❤"
  },
  {
    title:"Java programming",
    date:"Fall 2015",
    description:"Introduction to OOP Java using the Greenfoot programming library, followed by an intermediate Java class.",
    skill:"❤❤❤"

  }
];


	// $resource("json/classes.json").get();

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
