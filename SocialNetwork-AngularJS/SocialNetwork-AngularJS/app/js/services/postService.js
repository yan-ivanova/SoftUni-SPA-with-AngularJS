'use strict';

app.factory('postsData', ['$resource', 'baseServiceUrl', 'authService', 'notifyService',
    function ($resource, baseServiceUrl, authService) {
        function getNewsFeed(startPostId, pageSize) {
            return $resource(
            baseUrl + '/api/me/feed?StartPostId=' + (startPostId || '') + '&PageSize=' + pageSize,
            null,
            {
                'get': {
                    method: 'GET',
                    isArray: true,
                    headers: authService.getAuthHeaders()
                }
            })
        }

        function getUserWall(username, startPostId, pageSize) {
            return $resource(
            baseUrl + '/api/users/' + username + '/wall?StartPostId=' + (startPostId || '') + '&PageSize=' + pageSize,
            null,
            {
                'get': {
                    method: 'GET',
                    isArray: true,
                    headers: authService.getAuthHeaders()
                }
            })
        }

        function addPost(post) {
            return $resource(
            baseUrl + '/api/posts',
            null,
            {
                'save': {
                    method: 'POST',
                    headers: authService.getAuthHeaders()
                }
            })
        }

        function editPost(postId, postContent) {
            return $resource(
            baseUrl + '/api/posts/' + postId,
            null,
            {
                'update': {
                    method: 'PUT',
                    headers: authService.getAuthHeaders()
                }
            })
        }

        function deletePost(postId) {
            return $resource(
            baseUrl + '/api/posts/' + postId,
            null,
            {
                'delete': {
                    method: 'DELETE',
                    headers: authService.getAuthHeaders()
                }
            })
        }

        function getPostComments(postId) {
            return $resource(
            baseUrl + '/api/posts/' + postId + '/comments',
            null,
            {
                'get': {
                    method: 'GET',
                    isArray: true,
                    headers: authService.getAuthHeaders()
                }
            })
        }

        function likePost(postId) {
            return $resource(
            baseUrl + '/api/posts/' + postId + '/likes',
            null,
            {
                'save': {
                    method: 'POST',
                    headers: authService.getAuthHeaders()
                }
            })
        }

        function unlikePost(postId) {
            return $resource(
            baseUrl + 'api/posts/' + postId + '/likes',
            null,
            {
                'delete': {
                    method: 'DELETE',
                    headers: authService.getAuthHeaders()
                }
            })
        }

        return {
            getNewsFeed: function (success, error) {
                return getNewsFeed.get().success(success).error(error);
            },
            getUserWall: function (success, error) {
                return getUserWall.get().success(success).error(error);
            },
            addPost: function (post, success, error) {
                return addPost.save(post).success(success).error(error);
            },
            editPost: function (postContent, success, error) {
                return editPost.update(postContent).success(success).error(error);
            },
            deletePost: function (success, error) {
                return deletePost.delete().success(success).error(error);
            },
            getPostComments: function (success, error) {
                return getPostComments.get().success(success).error(error);
            },
            likePost: function  (success, error) {
                return likePost.save().success(success).error(error);
            },
            unlikePost: function (postId, success, error) {
                return unlikePost.delete(postId).success(success).error(error);
            }
        }
    }]);

// with $http

//app.factory('postsData', ['$http', 'baseServiceUrl', 'authService', 'notifyService',
//    function ($http, baseServiceUrl, authService, notifyService) {
//        return {
//            getNewsFeed: function(startPostId, pageSize, success, error) {
//                var request = {
//                    method: 'GET',
//                    url: baseUrl + '/api/me/feed?StartPostId=' + (startPostId || '') + '&PageSize=' + pageSize,
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            },

//            getUserWall: function(username, startPostId, pageSize, success, error) {
//                var request = {
//                    method: 'GET',
//                    url: baseUrl + '/api/users/' + username + '/wall?StartPostId=' + (startPostId || '') + '&PageSize=' + pageSize,
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            },

//            addPost: function(postData, success, error) {
//                var request = {
//                    method: 'POST',
//                    url: baseUrl + '/api/posts',
//                    data: postData,
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(function(data){
                
//                    success(data);
//                    }).error(error);
//            },

//            editPost: function(postId, postContent, success, error) {
//                var request = {
//                    method: 'PUT',
//                    url: baseUrl + '/api/posts/' + postId,
//                    data: postContent,
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            },

//            deletePost: function(postId, success, error) {
//                var request = {
//                    url:baseUrl + '/api/posts/' + postId,
//                    method: 'DELETE',
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            },

//            getPostComments:function(postId, success, error) {
//                var request = {
//                    method: 'GET',
//                    url: baseUrl + '/api/posts/' + postId + '/comments',
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            },

//            likePost: function(postId, success, error) {
//                var request = {
//                    method: 'POST',
//                    url: baseUrl + '/api/posts/' + postId + '/likes',            
//                    data: postId,
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(function(data){
                
//                    success(data);
//                }).error(error);
//            },

//            unlikePost: function(postId, success, error) {
//                var request = {
//                    method: 'DELETE',
//                    url: baseUrl + 'api/posts/' + postId + '/likes',   
//                    headers: authService.getAuthHeaders()
//                }
//                $http(request).success(success).error(error);
//            }
//        }
//    }]);