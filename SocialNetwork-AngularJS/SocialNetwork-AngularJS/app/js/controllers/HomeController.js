'use strict';

app.controller('HomeController', ['$scope', '$rootScope', '$location', 'userService', 'notifyService',  
    function ($scope, $location, $rootScope, authService, userService, notifyService, $timeout) {
        //$scope.getMyData = function () {
        //    userService.getUserData(
        //        function success(data) {
        //            $scope.userData = data;
        //            console.log(userdata);
        //            notifyService.showInfo("Password changed successfully");
        //           // $location.path("/");
        //        },
        //        function error(err) {
        //            notifyService.showError("Password change failed", err);
        //        }
        //    );
        //};

        //$scope.getMyData();

        $scope.getUsersData = function (username) {
            userService.getUserPreviewData(username,
                function success(data) {
                    $scope.usersData = data;
                    //$location.path("/");
                },
                function error(err) {
                    notifyService.showError("Get data failed", err);
                }
            );
        };

        $scope.getUsersFullData = function (username) {
            userService.getUserFullData(username,
                function success(data) {
                    notifyService.showInfo("Password changed successfully");
                   // $location.path("/");
                },
                function error(err) {
                    notifyService.showError("Password change failed", err);
                }
            );
        };

        //$scope.searchResults = [];
        //$scope.searchUser = userService.searchUsersByName(searchTerm);
        $scope.searchUser = function (searchTerm) {
            userService.searchUsersByName(searchTerm).$promise.then(
           // result.data.forEach(function(val, i) { 
           //     $scope.documents.push
                function success(data) {            
                    $scope.searchResults = data;
                    notifyService.showInfo("Password changed successfully");
                    //$location.path("/");
                },
                function error(err) {
                    notifyService.showError("Password change failed", err);
                }
            );
        };

        $scope.clearSearchResults = function () {
            $timeout(function () {
                $scope.searchResults = undefined;
                $scope.searchTerm = "";
            }, 400);
        };

    }
]);