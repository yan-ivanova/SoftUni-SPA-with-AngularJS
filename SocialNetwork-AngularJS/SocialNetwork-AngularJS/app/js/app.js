'use strict';

var app = angular.module('SocialNetwork', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
app.constant('pageSize', 4);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        //controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/users/:username', {
        templateUrl: 'templates/wall.html',
        controller: 'WallController'
    });

    $routeProvider.when('/users/:username/friends', {
        templateUrl: 'templates/myFriends.html',
        controller: 'MyFriendsController'
    });

    $routeProvider.when('/profile', {
        templateUrl: 'templates/userProfile.html',
        controller: 'UserProfileController'
    });

    $routeProvider.when('/profile/password', {
        templateUrl: 'templates/changePassword.html',
        controller: 'ChangePasswordController'
    });


        $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});

app.run(function ($rootScope, $location, authService) {
    $rootScope.$on('$locationChangeStart', function (event) {
        if ($location.path().indexOf("/users/") != -1 && !authService.isLoggedIn()) {
            // Authorization check: anonymous site visitors cannot access user routes
            $location.path("/");
        }
    });
});