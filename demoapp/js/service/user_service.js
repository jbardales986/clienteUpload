'use strict';

App.factory('TokenService', ['$http', '$q', function($http, $q){

	return {
		
			fetchAllTokens: function() {
					return $http.get('http://osce.gob.pe.upload:8090/token/')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching token');
										return $q.reject(errResponse);
									}
							);
			},
		    
		    createToken: function(token){
					return $http.post('http://osce.gob.pe.upload:8090/token/', token)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while creating token');
										return $q.reject(errResponse);
									}
							);
		    }
		
	};

}]);
