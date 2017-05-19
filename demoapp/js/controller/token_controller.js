'use strict';

App.controller('TokenController', ['$scope', 'TokenService', function($scope, TokenService) {
          var self = this;
          //self.token={id:null,user:'', email:'', token:''};
          self.token={ user:'',password:'', token:'' }
          self.tokens=[];
              
          self.fetchAllTokens = function(){
              TokenService.fetchAllTokens()
                  .then(
      					       function(d) {
      						        self.tokens = d;
      					       },
            					function(errResponse){
            						console.log('Error while fetching Currencies');
            					}
      			       );
          };
           
          self.createToken = function(token){
             TokenService.createToken(token).then(
                       function(d) {
                          console.log("scontroller :createToken ");
                         // console.log(d);
                          self.token = angular.copy(d);
                          fileUploadService.containerClient.config.token=self.token.token;
                          if (fileUploadService.containerClient.config.idStore == "0" ){
                              fileUploadService.containerClient.config.uuidGPA=self.token.token;

                           }

                          console.log(self.token.token);
                          
                          
                       },
                      function(errResponse){
                        console.log('Error save token');
                      }
                   );
             
          };

         

         // self.fetchAllTokens();

          self.submit = function() {
             
                  console.log('Saving New Token', self.token);    
                  self.createToken(self.token);
              
              self.reset();
          };
              
          self.edit = function(id){
              console.log('id to be edited', id);
              for(var i = 0; i < self.tokens.length; i++){
                  if(self.tokens[i].id == id) {
                     self.token = angular.copy(self.tokens[i]);
                     break;
                  }
              }
          };
              
         

          
          self.reset = function(){
              self.token={id:null,user:'',email:'', token:''};
              $scope.myForm.$setPristine(); //reset Form
          };

      }]);
