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
										console.log('Error while fetching token');
										return $q.reject(errResponse);
									}
							);
			},
		    
		    createToken: function(token){
		    	console.log('seenvia:' +  token);
					return $http.post('http://osce.gob.pe.upload:8090/token/', token , {headers: {'Content-Type': 'application/json'} })
							.then(
									function(response){
										console.log("response:" + response.headers)
										return response.data;
									}, 
									function(errResponse){
										console.log('Error while creating token');
										return $q.reject(errResponse);
									}
							);
		    }
		
	};

}]);
