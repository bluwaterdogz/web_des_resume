app.config(function($stateProvider, $urlRouterProvider){
  var BASE_PATH = "/web_des_resume";
  //  var BASE_PATH = ""; // for testing:
  $urlRouterProvider.otherwise(BASE_PATH);
  $stateProvider
    .state('intro',{
      url:BASE_PATH+"/intro",
      templateUrl:'/views/intro.html'
    })
    .state('splash',{
      url:BASE_PATH,
      templateUrl:BASE_PATH+'/views/intro.html',
      controller:'SplashCtrl'
    })
    .state('skills',{
        url:BASE_PATH+"/skills",
        templateUrl:BASE_PATH+'/views/skills.html'
    })
    .state('about',{
        url:BASE_PATH+"/about",
        templateUrl:BASE_PATH+'/views/about.html'
    })
    .state('experiences',{
        url: BASE_PATH+"/experiences",
        views: {
            '': { templateUrl:BASE_PATH+'/views/experiences.html'},
            'work@experiences': { templateUrl: BASE_PATH+'/views/work.html'},
            'projects@experiences': {
               templateUrl: BASE_PATH+'/views/projects.html',
               controller:'ProjectCtrl'
             }
        }
    });
});
