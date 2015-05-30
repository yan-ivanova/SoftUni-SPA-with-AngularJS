'use strict';

app.controller('UserFriendsController',
   function ($scope, notifyService, pageSize, authService, userFriendsService) {
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

       $scope.getMyFriendsPreview = function () {
           userFriendsService.getUserFriendsPreview(
              function success(data) {
                  $scope.posts = data;
              },
               function error(err) {
                   notifyService.showError("Cannot load posts", err);
               }
           );
       };

       $scope.getMyFriends = function () {
           userFriendsService.getUserFriends(
              function success(data) {
                  $scope.posts = data;
              },
               function error(err) {
                   notifyService.showError("Cannot load posts", err);
               }
           );
       };

       $scope.getUserFriendsPreview = function (username) {
           userFriendsService.getOtherUserFriendsPreview(username,
              function success(data) {
                  $scope.posts = data;
              },
               function error(err) {
                   notifyService.showError("Cannot load posts", err);
               }
           );
       };

       $scope.getUserFriends = function (username) {
           userFriendsService.getOtherUserFriends(username,
              function success(data) {
                  $scope.posts = data;
              },
               function error(err) {
                   notifyService.showError("Cannot load posts", err);
               }
           );
       };

       $scope.getMyRequests = function () {
           userFriendsService.getFriendRequests(
              function success(data) {
                  $scope.posts = data;
              },
               function error(err) {
                   notifyService.showError("Cannot load posts", err);
               }
           );
       };

       $scope.sendFriendsRequest = function (name) {
           userFriendsService.sendFriendRequest(name,
              function success(data) {
                  $scope.posts = data;
              },
               function error(err) {
                   notifyService.showError("Cannot load posts", err);
               }
           );
       };

       $scope.ApproveRequest = function (requestId) {
           userFriendsService.approveFriendRequest(requestId,
              function success(data) {
                  $scope.posts = data;
              },
               function error(err) {
                   notifyService.showError("Cannot load posts", err);
               }
           );
       };

       $scope.RejectRequest = function (requestId) {
           userFriendsService.rejectFriendRequest(requestId,
              function success(data) {
                  $scope.posts = data;
              },
               function error(err) {
                   notifyService.showError("Cannot load posts", err);
               }
           );
       };

   }
);