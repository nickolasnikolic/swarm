heroesApp.controller('HomeController', ['$scope', '$state', function($scope, $state) {
  document.title = 'swarm.network - home'; //set the page title
}])

heroesApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {
  document.title = 'swarm.network - contact'; //set the page title
  $('#submitContact').click(function(){
    //push the message to the utility that sends email
    $.post('../api/contact', $scope.message)
      .success(function(data) {
        //do something about it
        console.log(data);
      })
      .error(function(error) {
        //do something about it
        console.log(error);
      });
  });
}]);
