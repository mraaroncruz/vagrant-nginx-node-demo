'use strict';

angular.module('appApp')
  .controller('MainCtrl', function ($scope, $http) {
    var getMessages = function () {
      $http.get('/api/messages').success(function(messages) {
        $scope.messages = messages;
      });
    }

    $http.get("/api/hostname").success(function (host) { $scope.hostname = host.hostname })

    var saveMessage = function () {
      $http.post('/api/messages', { message: $scope.message }).success(function (message) {
        $scope.messages.push(message);
      });
      $scope.message = {};
    };

    var poll = function () {
      getMessages();
      setTimeout(poll, 1000);
    }

    $scope.saveMessage = saveMessage;
    $scope.message = {};
    poll();
  });
