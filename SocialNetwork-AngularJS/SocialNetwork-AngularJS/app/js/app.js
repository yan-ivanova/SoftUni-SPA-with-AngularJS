'use strict';

var app = angular.module('SocialNetwork', ['ngRoute', 'ngResource', 'ngFileUpload']);

app.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
app.constant('pageSize', 4);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/partial/userPage.html',
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
        templateUrl: 'templates/partial/wall.html',
        controller: 'WallController'
    });

    $routeProvider.when('/users/:username/friends', {
        templateUrl: 'templates/partial/myFriends.html',
        controller: 'MyFriendsController'
    });

    $routeProvider.when('/profile', {
        templateUrl: 'templates/partial/changeProfile.html',
        controller: 'ChangeProfileController'
    });

    $routeProvider.when('/profile/password', {
        templateUrl: 'templates/partial/changePassword.html',
        controller: 'ChangePasswordController'
    });


        $routeProvider.otherwise(
        { redirectTo: '/'  }
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