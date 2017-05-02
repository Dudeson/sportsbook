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
					resultArray[match.id].sortedOdds = resultArray[match.id].sortedOdds || {};
					angular.forEach($scope.types, function(type, key){
						
						angular.forEach(type.odds, function(odd, key){
							var priority = type.priority.toString() + odd.priority.toString(); 
							resultArray[match.id].sortedOdds[priority] = []; 
							angular.forEach(match.odds[type.index], function(item, key){
								if (item.name == odd.id ){
									iterations++;
									resultArray[match.id].sortedOdds[priority] = item; 
								}else {
									iterations++;
								}
							})
						})
						
					})

				})

				$scope.matches = resultArray;
				
			});
		}

	}
})();
