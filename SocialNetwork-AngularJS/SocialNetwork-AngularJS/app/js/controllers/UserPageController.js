'use strict';

app.controller('UserPageController',
   function ($scope, notifyService, pageSize, authService) {
      $scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };

      $scope.callUserSearch = function () {
          $http({ method: 'GET', url: '/someUrl' }).
            success(function (data, status, headers, config) {
                $scope.results.push(data);  //retrieve results and add to existing results
            })
      }
      //$scope.reloadAds = function() {
      //    adsService.getAds(
      //        $scope.adsParams,
      //        function success(data) {
      //            $scope.ads = data;
      //        },
      //        function error(err) {
      //            notifyService.showError("Cannot load ads", err);
      //        }
      //    );
      //};

      //$scope.reloadAds();
	  
	  //// This event is sent by RightSideBarController when the current category is changed
      //  $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
      //      $scope.adsParams.categoryId = selectedCategoryId;
      //      $scope.adsParams.startPage = 1;
      //      $scope.reloadAds();
      //  });

      //  // This event is sent by RightSideBarController when the current town is changed
      //  $scope.$on("townSelectionChanged", function(event, selectedTownId) {
      //      $scope.adsParams.townId = selectedTownId;
      //      $scope.adsParams.startPage = 1;
      //      $scope.reloadAds();
      //  });
   }
);
