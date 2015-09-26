var heroesApp = angular.module('nono', ['ui.router', 'ngSanitize', 'angular.filter'])
  .config(['$stateProvider',
    function($stateProvider) {
      $stateProvider

      
      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        controller: 'ContactController',
        onEnter: function($state) {
          console.log('contact');
        }
      })


      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
            controller: 'HomeController',
        onEnter: function($state) {
          console.log('home');
        }
      })

    }
  ]);
