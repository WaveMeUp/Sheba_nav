myApp.controller('ProcCtrl', function($scope, $compile, Data, $translate, $state, $ionicLoading, ionicMaterialInk, $ionicScrollDelegate, $timeout) {
  ionicMaterialInk.displayEffect();
  $scope.init = function() {
        var mapOptions = {
          center: { lat: 32.047814, lng: 34.845270},
          zoom: 14
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var GeoMarker = new GeolocationMarker(map);

        directionsDisplay = new google.maps.DirectionsRenderer();
        var directionsService = new google.maps.DirectionsService();

    switch (Data.byCar) {
      case true:
        var request = {
          origin: new google.maps.LatLng(Data.pointA.lat,Data.pointA.long), //точка старта
          destination: new google.maps.LatLng(Data.pointB.lat,Data.pointB.long), //точка финиша
          travelMode: google.maps.DirectionsTravelMode.DRIVING //режим прокладки маршрута
        };
        $translate('Nav_drive').then(function (mode) {
          $scope.mode = mode;
        })
        break;
      case false:
        var request = {
          origin: new google.maps.LatLng(Data.pointA.lat,Data.pointA.long), //точка старта
          destination: new google.maps.LatLng(Data.pointB.lat,Data.pointB.long), //точка финиша
          travelMode: google.maps.DirectionsTravelMode.WALKING //режим прокладки маршрута
        };
        $translate('Nav_walk').then(function (mode) {
          $scope.mode = mode;
        })
        break;
      default:
        alert ('Error during navigation setup');
        $state.go('tab.nav');
        break;
    }

    pointApos = new google.maps.LatLng(Data.pointA.lat,Data.pointA.long);
    pointBpos = new google.maps.LatLng(Data.pointB.lat,Data.pointB.long);
    var contentString = "<div>"+Data.pointA.name+"</div>";
    var compiled = $compile(contentString)($scope);
    var infowindow_A = new google.maps.InfoWindow({
          content: compiled[0]
    });
    var marker_A = new google.maps.Marker({
          position: pointApos,
          map: map,
          title: Data.pointA.name
    });
    google.maps.event.addListener(marker_A, 'click', function() {
      infowindow_A.open(map,marker_A);
    });
    $scope.clickA = function() {
      infowindow_A.open(map,marker_A);
    }

    var contentString = "<div>"+Data.pointB.name+"</div>";
    var compiled = $compile(contentString)($scope);
    var infowindow_B = new google.maps.InfoWindow({
          content: compiled[0]
    });
    var marker_B = new google.maps.Marker({
          position: pointBpos,
          map: map,
          title: Data.pointB.name
    });
    google.maps.event.addListener(marker_B, 'click', function() {
      infowindow_B.open(map,marker_B);
    });
    $scope.clickB = function() {
      infowindow_B.open(map,marker_B);
    }

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setOptions( { suppressMarkers: true } );
        }
    });

    directionsDisplay.setMap(map);

        google.maps.event.addListenerOnce(map, 'idle', function(){
          $ionicLoading.hide();
        });
      }
  $timeout(function() {
    $ionicScrollDelegate.scrollBottom(true);
  }, 2000);
  $scope.reset_nav = function() {
    $state.go('tab.nav');
  }
})