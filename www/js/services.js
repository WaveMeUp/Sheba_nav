angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'pascalprecht.translate'])
.factory('Data', function() {
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
