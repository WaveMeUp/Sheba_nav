var myApp = angular.module('starter.controllers', []);



myApp.controller('NavCtrl', function($scope, $ionicModal,$state, $timeout, ionicMaterialInk) {
	$ionicModal.fromTemplateUrl('templates/start.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.closeStart = function() {
    $scope.modal.hide();
  };
  $scope.start_nav = function() {
    $state.go('tab.start');
    $scope.modal.show();
  };
  if (window.localStorage['start_modal'] == 'true') {
    $timeout(function() {
      $scope.modal.show();
    }, 2000);
  }
  ionicMaterialInk.displayEffect();
});

myApp.controller('AboutCtrl', function($scope, $timeout, $ionicLoading, $ionicModal, ionicMaterialInk, ionicMaterialMotion) {
  ionicMaterialInk.displayEffect();
  $timeout(function() {
    ionicMaterialMotion.fadeSlideIn();
  },450)
 
  $ionicModal.fromTemplateUrl('templates/info.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/map.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal_map = modal;
  });

  $scope.closeInfo = function() {
    $scope.modal.hide();
  };

  $scope.openInfo = function() {
    $scope.modal.show();
  };

  $scope.closeMap = function() {
    $scope.modal_map.hide();
  };

  var i = 0;

  $scope.openMap = function() {
    if (i==0) {
      $ionicLoading.show({
        content: 'Loading',
        template: '<ion-spinner icon="ios"></ion-spinner>',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
    }
    $scope.modal_map.show();
    if (i==0) {
      $timeout(function() {
          var mapOptions = {
            center: { lat: 32.047814, lng: 34.845270},
            zoom: 16
          };
          var center_map = new google.maps.Map(document.getElementById('map-cont'),
              mapOptions);

          var GeoMarker = new GeolocationMarker(center_map);

          google.maps.event.addListenerOnce(center_map, 'idle', function(){
            google.maps.event.trigger(center_map, 'resize');
            if (i==0) $ionicLoading.hide();
            i++;
          });
      }, 800);
  }
  };

      
});

myApp.controller('StartCtrl', function($scope, $translate, $timeout, $state, $ionicLoading, ionicMaterialInk, Data) {
  ionicMaterialInk.displayEffect();
  $scope.byCar = true;
  $translate('Nav_bycar').then(function (mode) {
          $scope.mode = mode;
  })
  Data.byCar = true;
  $scope.places = [
    { name: 'Entrance',
      lat: 32.050565,
      long: 34.841687},
    { name: 'Main building',
      lat:  32.046514,
      long: 34.841944},
    { name: 'Prof. Michael Belkin',
      lat: 32.045486,
      long: 34.845729},
      {name: 'Psychiatric',
      lat: 32.047983,
      long: 34.846829},
      {name: 'Obstetrics',
      lat: 32.049321,
      long: 34.843449}
  ];
  $scope.modeChange = function() {
    Data.byCar = document.getElementById('navCheck').checked;
    $scope.byCar = Data.byCar;
    if(Data.byCar) {
      $translate('Nav_bycar').then(function (mode) {
          $scope.mode = mode;
      })
    } else {
      $translate('Nav_bylegs').then(function (mode) {
          $scope.mode = mode;
      })
    }
  }

  $scope.loading = function() {
    $ionicLoading.show({
      content: 'Loading',
      template: '<ion-spinner icon="ios"></ion-spinner>',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $timeout(function() {
      var selectA = document.getElementById('selectA');
      var selectB = document.getElementById('selectB');
      indexA = selectA.options[selectA.selectedIndex].index;
      indexB = selectB.options[selectB.selectedIndex].index;
      Data.pointA.name = $scope.places[indexA]['name'];
      Data.pointA.lat = $scope.places[indexA]['lat'];
      Data.pointA.long = $scope.places[indexA]['long'];
      Data.pointB.name = $scope.places[indexB]['name'];
      Data.pointB.lat = $scope.places[indexB]['lat'];
      Data.pointB.long = $scope.places[indexB]['long'];
      $state.go('tab.nav_on');
      $scope.modal.hide();
    }, 1000)
  };
});

myApp.controller('SettingsCtrl', function($scope, $translate, ionicMaterialInk) {
  ionicMaterialInk.displayEffect();

  $scope.start_route = window.localStorage['start_modal'];
  $scope.update = function() {
   $scope.item.size.code = $scope.selectedItem.code;
  }
  $scope.toggle_start = function() {
      window.localStorage['start_modal'] = !(window.localStorage['start_modal'] === 'true');
  }
  $scope.changeLanguage = function(langKey) {
    window.localStorage['language'] = langKey;
    $translate.use(langKey);
  };

  $scope.languages = [
    { name: 'Русский',
      name_min: 'ru',
      check: window.localStorage['language']=='ru'},
    { name: 'English',
      name_min: 'en',
      check: window.localStorage['language']=='en'}
  ];
});

