(function() {
  'use strict';

  angular
      .module('test')
      .service('backendData', backendData);

  /** @ngInject */
  function backendData($http) {

    // objects to store fetched data
    this.treeData = {};
    this.layoutData = {};
    
    // getting tree structure 
    function getTree() {
      return $http({
        method: 'GET',
        url: './tree.json'
      }).then(function (response) {
        return response.data;
      }, function (response) {
        throw new Error('Whoops!',response);
      });
    }

    // getting odds layout
    function getOddsLayout() {
      return $http({
        method: 'GET',
        url: './layout.json'
      }).then(function (response) {
        return response.data;
      }, function (response) {
        throw new Error('Whoops!',response);
      });
    }

    // getting matches
    function getMatches(leagueId) {
      return $http({
        method: 'GET',
        url: './matches.json'
      }).then(function (response) {
        return response.data;
      }, function (response) {
        throw new Error('Whoops!',response);
      });
    }

    this.getTree = getTree;
    this.getOddsLayout = getOddsLayout;
    this.getMatches = getMatches;
  }

})();
