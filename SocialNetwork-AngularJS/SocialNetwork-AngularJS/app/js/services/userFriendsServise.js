'use strict';

app.factory('userFriendsService', ['$resource', 'baseServiceUrl', 'authService', 'notifyService',
    function ($resource, baseServiceUrl, authService) {
        return {
            //getUserFriendsPreview: function (success, error) {
            //    var friendsPreview = $resource(
            //        baseServiceUrl + '/api/me/friends/preview',
            //        null,
            //        {
            //            'getFriendsPreview': {
            //                method: 'GET',
            //                headers: authService.getAuthHeaders()
            //            }
            //        }
            //    );

            //    // return friendsPreview.getFriendsPreview(success, error);
            //    return friendsPreview.query(success, error);
            //},

            //getUserFriends: function (success, error) {
            //    var friends = $resource(
            //        baseServiceUrl + '/api/me/friends',
            //        null,
            //        {
            //            'getFriends': {
            //                method: 'GET',
            //                isArray: true,
            //                headers: authService.getAuthHeaders()
            //            }
            //        }
            //    );

            //    //return friends.getFriends(success, error);
            //    return friends.query(success, error);
            //},

            getOtherUserFriendsPreview: function (username, success, error) {
                var friendsPreview = $resource(
                    baseServiceUrl + '/api/users/' + username + '/friends/preview',
                    null,
                    {
                        'getOtherFriendsPreview': {
                            method: 'GET',
                            headers: authService.getAuthHeaders()
                        }
                    }
                );

                return friendsPreview.getOtherFriendsPreview(username, success, error);
            },

            getOtherUserFriends: function (username, success, error) {
                var friends = $resource(
                    baseServiceUrl + '/api/users/' + username + '/friends',
                    null,
                    {
                        'getOtherFriends': {
                            method: 'GET',
                            isArray: true,
                            headers: authService.getAuthHeaders()
                        }
                    }
                );

                return friends.getOtherFriends(username, success, error);
            },

            getFriendRequests: function (success, error) {
                var friendRequests = $resource(
                    baseServiceUrl + '/api/me/requests',
                    null,
                    {
                        'getRequests': {
                            method: 'GET',
                            isArray: true,
                            headers: authService.getAuthHeaders()
                        }
                    }
                );

                return friendRequests.getRequests(success, error);
            },

            sendFriendRequest: function (name, success, error) {
                var friendRequest = $resource(
                    baseServiceUrl + '/api/me/requests/' + name,
                    null,
                    {
                        'sendRequests': {
                            method: 'POST',
                            headers: authService.getAuthHeaders()
                        }
                    }
                );

                return friendRequest.sendRequests(name, success, error);
            },

            approveFriendRequest: function (requestId, success, error) {
                var approveRequests = $resource(
                    baseServiceUrl + '/api/requests/' + requestId + '?status=approved',
                    null,
                    {
                        'approve': {
                            method: 'PUT',
                            isArray: true,
                            headers: authService.getAuthHeaders()
                        }
                    }
                );

                return approveRequests.approve(requestId, success, error);
            },

            rejectFriendRequest: function (requestId, success, error) {
                var rejectRequest = $resource(
                    baseServiceUrl + '/api/requests/' + requestId + '?status=rejected',
                    null,
                    {
                        'reject': {
                            method: 'PUT',
                            headers: authService.getAuthHeaders()
                        }
                    }
                );

                return rejectRequest.reject(requestId, success, error);
            }
        }
    }]);

//with $http

//app.factory('userFriendsService', ['$http', 'baseServiceUrl', 'authService', 'notifyService',
//    function ($http, baseServiceUrl, authService, notifyService) {
//        return {
//            getUserFriendsPreview: function (success, error) {
//                var request = {
//                    method: 'GET',
//                    url: baseServiceUrl + '/api/me/friends/preview',
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            },

//            getUserFriends: function (success, error) {
//                var request = {
//                    method: 'GET',
//                    url: baseServiceUrl + '/api/me/friends',
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            },

//            getOtherUserFriendsPreview: function (username, success, error) {
//                var friendsPreview = {
//                    method: 'GET',
//                    url: baseServiceUrl + '/api/users/' + username + '/friends/preview',
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            },

//            getOtherUserFriends: function (username, success, error) {
//                var friends = {
//                    method: 'GET',
//                    url: baseServiceUrl + '/api/users/' + username + '/friends',
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            },

//            getFriendRequests: function (success, error) {
//                var friendRequests = {
//                    method: 'GET',
//                    url: baseServiceUrl + '/api/me/requests',
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            },

//            sendFriendRequest: function (requestData, name, success, error) {
//                var friendRequest = {
//                    method: 'POST',
//                    url: baseServiceUrl + '/api/me/requests/' + name,
//data: requestData,
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(function(data){

//success(data);
//}).error(error);
//            },

//            approveFriendRequest: function (friendRequest, requestId, success, error) {
//                var approveRequests = {
//                    method: 'PUT',
//                    url: baseServiceUrl + '/api/requests/' + requestId + '?status=approved',
//data: friendRequest,
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            },

//            rejectFriendRequest: function (friendRequest, requestId, success, error) {
//                var rejectRequest = {
//                    method: 'PUT',
//                    url: baseServiceUrl + '/api/requests/' + requestId + '?status=rejected',
//data: friendRequest,
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            }
//        }
//    }]);

//

app.factory('myList', ['$resource', 'baseServiceUrl', 'authService', 'notifyService',
    function ($resource, baseServiceUrl, authService) {
        var friendsPreview = $resource(
            baseServiceUrl + '/api/me/friends/preview',
            null,
            {
                'getFriendsPreview': {
                    method: 'GET',
                    headers: authService.getAuthHeaders()
                }
            }
        );

        // return friendsPreview.getFriendsPreview(success, error);
        return {
            getUserFriendsPreview: function (params, success, error) {
                return friendsPreview.getFriendsPreview(success, error);
            }
        }
    }
]);

app.factory('my', ['$resource', 'baseServiceUrl', 'authService', 'notifyService',
    function ($resource, baseServiceUrl, authService) {
        var friends = $resource(
            baseServiceUrl + '/api/me/friends'
            //null,
            //{
            //    'getFriends': {
            //        method: 'GET',
            //        isArray: true,
            //        headers: authService.getAuthHeaders()
            //    }
            //}
        );
        //return friends.getFriends(success, error);
        return {
            getUserFriends: function (params, success, error) {
                return friends.query(success, error);
            }
        }
    }
]);