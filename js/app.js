// define our application and pull in ngRoute and ngAnimate
var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

// ROUTING ===============================================
// set our routing for this application
// each route will pull in a different controller
animateApp.config(function($routeProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'page-home.php',
            controller: 'mainController'
        })

        // about page
        .when('/about', {
            templateUrl: 'page-about.php',
            controller: 'aboutController'
        })

        // contact page
        .when('/gallery', {
            templateUrl: 'page-gallery.php',
            controller: 'galleryController'
        });

});


// CONTROLLERS ============================================
// home page controller
animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

// contact page controller
animateApp.controller('galleryController', function($scope) {
    $scope.pageClass = 'page-gallery';
});