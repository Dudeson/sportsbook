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
			backendData.getMatches(id).then(function(response){
				$scope.matches = response.data;	
				$scope.types = $rootScope.oddsLayout;
				var resultArray = {};
				var sortedHead = {};
				

				angular.forEach($scope.matches, function(match, key){
					resultArray[match.id] = match;
					resultArray[match.id].sortedOdds = resultArray[match.id].sortedOdds || {};
					angular.forEach($scope.types, function(type, key){
						angular.forEach(type.odds, function(odd, key){
							var priority = type.priority.toString() + odd.priority.toString(); 
							sortedHead[priority] = odd;

							resultArray[match.id].sortedOdds[priority] = []; 
							angular.forEach(match.odds[type.index], function(item, key){
								if (item.name == odd.id ){
									resultArray[match.id].sortedOdds[priority] = item; 
								}
							})
						})
						
					})
				})

				$scope.sortedHead = sortedHead;
				$scope.matches = resultArray;
				$scope.gridBuilded = true;
				
			});
		}

	}
})();
