'use strict';

app.controller('UserFriendsController', ['$scope', '$rootScope', '$location', 'userService', 'userFriendsService', 'my', "myList",
   function ($scope, $rootScope, notifyService, pageSize, authService, userFriendsService, userService) {
       $scope.postParams = {
           'startPage': 1,
           'pageSize': pageSize
       };

       //$scope.callUserSearch = function () {
       //    $http({ method: 'GET', url: '/someUrl' }).
       //      success(function (data, status, headers, config) {
       //          $scope.results.push(data);  //retrieve results and add to existing results
       //      })
       //}

       $scope.getMyFriendsPreview = function () {  //list, count
           mylList.getUserFriendsPreview(
              function success(data) {
                  $scope.myFriendsList = data;
                  notifyService.showInfo("Data loaded successfully");
              },
               function error(err) {
                   notifyService.showError("Cannot load data", err);
               }
           );
       };
       //$scope.getMyFriendsPreview();

       $scope.getMyFriends = function () {
           my.getUserFriends(
              function success(data) {
                  $scope.myFriends = data;
                  notifyService.showInfo("Data loaded successfully");
                  
              },
               function error(err) {
                   notifyService.showError("Cannot load data", err);
               }
           );
       };

       //$scope.getMyFriends();

       $scope.getUserFriendsPreview = function (username) {
           userFriendsService.getOtherUserFriendsPreview(username,
              function success() {
                  notifyService.showInfo("Data loaded successfully");
              },
               function error(err) {
                   notifyService.showError("Cannot load data", err);
               }
           );
       };

       $scope.getUserFriends = function (username) {
           userFriendsService.getOtherUserFriends(username,
              function success() {
                  notifyService.showInfo("Data loaded successfully");
              },
               function error(err) {
                   notifyService.showError("Cannot load data", err);
               }
           );
       };

       $scope.getMyRequests = function () {
           userFriendsService.getFriendRequests(
              function success() {
                  // $scope.posts = data;
                  notifyService.showInfo("Data loaded successfully");
              },
               function error(err) {
                   notifyService.showError("Cannot load data", err);
               }
           );
       };

       $scope.sendFriendsRequest = function (name) {
           userFriendsService.sendFriendRequest(name,
              function success() {
                  notifyService.showInfo("Data loaded successfully");
              },
               function error(err) {
                   notifyService.showError("Cannot load data", err);
               }
           );
       };

       $scope.ApproveRequest = function (requestId) {
           userFriendsService.approveFriendRequest(requestId,
              function success() {
                  notifyService.showInfo("Data loaded successfully");
              },
               function error(err) {
                   notifyService.showError("Cannot load data", err);
               }
           );
       };

       $scope.RejectRequest = function (requestId) {
           userFriendsService.rejectFriendRequest(requestId,
              function success() {
                  notifyService.showInfo("Data loaded successfully");
              },
               function error(err) {
                   notifyService.showError("Cannot load data", err);
               }
           );
       };

   }
]);