(function() {
	'use strict';

	angular
		.module('test')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($timeout, $scope, $rootScope, $filter, backendData) {
		var vm = this;
		$scope.gridBuilded = false;

		


		$scope.showGrid = function(id){
			backendData.getMatches(0).then(function(response){
				$scope.matches = response.data;	
				$scope.types = $rootScope.oddsLayout;
				$scope.gridBuilded = true;
				var resultArray = {};
				var iterations = 0;
				angular.forEach($scope.matches, function(match, key){
					resultArray[match.id] = match;
					angular.forEach(match.odds, function(oddtype, typekey){
						angular.forEach($scope.types, function(type, key){
							iterations++;
							resultArray[match.id].sortedOdds = resultArray[match.id].sortedOdds || {}
							resultArray[match.id].sortedOdds[type.priority] = resultArray[match.id].sortedOdds[type.priority] || {};
							if (typekey == type.index) {
								resultArray[match.id].sortedOdds[type.priority] = oddtype;
							}
						})
					})
				})

				
				angular.forEach(resultArray, function(match, key){
					angular.forEach(match.sortedOdds, function(sortedType, key){
						angular.forEach(sortedType, function(item, key){
							angular.forEach($scope.types, function(type, key){
								angular.forEach(type.odds, function(odd, key){
									iterations++
									if (item.name == odd.id) {
										item.priority = odd.priority;
									}
								})
							})
						})
					})
				})

				$scope.matches = resultArray;
				
			});
		}

	}
})();
