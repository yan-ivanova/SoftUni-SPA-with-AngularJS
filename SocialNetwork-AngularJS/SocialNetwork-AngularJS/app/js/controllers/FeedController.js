'use strict';

app.controller('UserPageController',
   function ($scope, notifyService, pageSize, authService, userService, postService) {
      $scope.postParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };


      $scope.newsFeed = function () {
          postService.getNewsFeed(
                    $scope.postParams.startPage, $scope.postParams.pageSize,
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
