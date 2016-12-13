app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('intro',{
      url:"/intro",
      templateUrl:'/web_des_resume/views/intro.html'
    })
    .state('splash',{
      url:"/",
      templateUrl:'/web_des_resume/views/splash.html',
      controller:'SplashCtrl'
    })
    .state('skills',{
        url:"/skills",
        templateUrl:'/web_des_resume/views/skills.html'
    })
    .state('about',{
        url:"/about",
        templateUrl:'/web_des_resume/views/about.html'
    })
    .state('experiences',{
        url: "/experiences",
        views: {
            '': { templateUrl:'/web_des_resume/views/experiences.html'},
            'work@experiences': { templateUrl: '/web_des_resume/views/work.html'},
            'projects@experiences': {
               templateUrl: '/web_des_resume/views/projects.html',
               controller:'ProjectCtrl'
             }
        }
    });
});
