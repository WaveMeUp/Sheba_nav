
myApp.config(['$translateProvider', function ($translateProvider, $scope) {
  $translateProvider.translations('en', {
    'Title': 'Sheba Navigation',
    'Item1_title': 'Select location',
    'Item1_text': 'Click on the plus icon',
    'Item2_title': 'Choose way of movement',
    'Item2_text': 'By legs or by car',
    'Item3_title': 'Start travel',
    'Item3_text': 'Tap "start" and here we go!',
    'Tab1_title': 'Navigation',
    'Tab2_title': 'About',
    'Tab3_title': 'Settings',
    'About_title': 'Sheba Navigation App',
    'About_desc': 'This application will help you to move around the Sheba Medical Center.<br>Click information icon to read more about Sheba Medical Center.',
    'Settings_lang': 'Language:',
    'Settings_other': 'Other',
    'Settings_new-route': 'New route on start',
    'Nav_title': 'Setup navigation',
    'Nav_pointA': 'Where are you?',
    'Nav_pointB': 'Final point',
    'Nav_bycar': 'By car',
    'Nav_start': 'Start!',
    'Nav_drive': 'Driving mode',
    'Nav_walk': 'Walking mode'
  });
 
  $translateProvider.translations('ru', {
    'Title': 'Sheba Navigation',
    'Item1_title': 'Выберите местоположение',
    'Item1_text': 'Нажмите на иконку',
    'Item2_title': 'Задайте тип передвижения',
    'Item2_text': 'Пешком или на автомобиле',
    'Item3_title': 'Запустите приложение!',
    'Item3_text': 'Нажмите "старт"!',
    'Tab1_title': 'Навигация',
    'Tab2_title': 'О приложении',
    'Tab3_title': 'Настройки',
    'About_title': 'Sheba Medical Center',
    'About_desc': 'Это приложение поможет вам ориентироваться на территории медицинского центра Sheba.<br>Нажмите на иконку для получения информации о медицинском центре Sheba.',
    'Settings_lang': 'Язык интерфейса:',
    'Settings_other': 'Другие',
    'Settings_new-route': 'Новый маршрут при открытии',
    'Nav_title': 'Настройка маршрута',
    'Nav_pointA': 'Где вы?',
    'Nav_pointB': 'Конечная точка',
    'Nav_bycar': 'На автомобиле',
    'Nav_start': 'Поехали!',
    'Nav_drive': 'На автомобиле',
    'Nav_walk': 'Пешком'
  });


 if(window.localStorage["language"] !== undefined) {
    $translateProvider.preferredLanguage(window.localStorage['language']);
 } else {
    window.localStorage['language'] = 'en';
    $translateProvider.preferredLanguage('en');
 }

 if (window.localStorage['start_modal'] == undefined ) {
    window.localStorage['start_modal'] = true; 
 }

}]);