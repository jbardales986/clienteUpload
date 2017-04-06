'use strict';

App.controller('TokenController', ['$scope', 'TokenService', function($scope, TokenService) {
          var self = this;
          self.token={id:null,user:'', email:'', token:''};
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
                          fileUploadService.containerClient.config.uuidGPA=self.token.token;
                          console.log(self.token.token);
                          
                          
                       },
                      function(errResponse){
                        console.log('Error save token');
                      }
                   );
             
          };

         

          self.fetchAllTokens();

          self.submit = function() {
              if(self.token.id==null){
                  console.log('Saving New Token', self.token);    
                  self.createToken(self.token);
              }else{
                  self.updateToken(self.token, self.token.id);
                  console.log('User updated with id ', self.token.id);
              }
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
