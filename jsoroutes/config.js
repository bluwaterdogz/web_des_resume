app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('intro',{
      url:"/intro",
      templateUrl:'../../views/intro.html'
    })
    .state('splash',{
      url:"/",
      templateUrl:'../../views/splash.html',
      controller:'SplashCtrl'
    })
    .state('skills',{
        url:"/skills",
        templateUrl:'../../views/skills.html'
    })
    .state('about',{
        url:"/about",
        templateUrl:'../../views/about.html'
    })
    .state('experiences',{
        url: "/experiences",
        views: {
            '': { templateUrl:'../../views/experiences.html'},
            'work@experiences': { templateUrl: '../../views/work.html'},
            'projects@experiences': {
               templateUrl: '../../views/projects.html',
               controller:'ProjectCtrl'
             }
        }
    });
});
