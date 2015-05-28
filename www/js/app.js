var myApp = angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'pascalprecht.translate']);

myApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
});

myApp.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position("bottom");
  $ionicConfigProvider.views.transition('ios');
  $ionicConfigProvider.scrolling.jsScrolling("false");
  $stateProvider

    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  .state('tab.nav', {
    url: '/nav',
    views: {
      'tab-nav': {
        templateUrl: 'templates/tab-nav.html',
        controller: 'NavCtrl'
      }
    }
  })

  .state('tab.nav_on', {
    url: '/nav_on',
    views: {
      'tab-nav': {
        templateUrl: 'templates/nav_on.html',
        controller: 'ProcCtrl'
      }
    }
  })

  .state('tab.about', {
      url: '/about',
      cache: false,
      views: {
        'tab-about': {
          templateUrl: 'templates/tab-about.html',
          controller: 'AboutCtrl'
        }
      }
    })

  .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/tab-settings.html',
          controller: 'SettingsCtrl'
        }
      }
    })

  .state('tab.start', {
    url: '/start',
    controller: 'StartCtrl'
  })

  $urlRouterProvider.otherwise('/tab/nav');

});

myApp.factory('Data', function() {
  return {
  	pointA: {
  		name: '',
  		lat: '',
  		long: ''
  	},
  	pointB: {
  		name: '',
  		lat: '',
  		long: ''
  	},
  	byCar: ''
  };
});
