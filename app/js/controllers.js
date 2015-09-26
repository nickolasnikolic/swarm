heroesApp.controller('IndexController', ['$scope', '$state', function($scope, $state) {

  $(document).scroll(function(){
    //stack the job listings
    $('#gridDisplay').packery({
      // options
      itemSelector: '.job',
      gutter: 1
    });
  });

  $('#searchButton').click(function(){

    var job = $('#jobName').val();
    var location = $('#locationName').val();

    console.log(job + ' ' + location);

    $.getJSON('../api/selection/' + job + '/' + location)
      .success(function(data) {

        console.log(data.results);
        $scope.jobsData = data.results;
        $scope.$apply();
        //stack the job listings
        $('#gridDisplay').packery({
          // options
          itemSelector: '.job',
          gutter: 1
        });
      })
      .error(function(error){
        console.log('error:');
        console.log(error);
      });


  });

}])

heroesApp.controller('HomeController', ['$scope', '$state', function($scope, $state) {
  document.title = 'heroes - home'; //set the page title

  $('#findJob').click(function(){
    $state.go('selection');
  });

}])

heroesApp.controller('SelectionController', ['$scope', '$state', function($scope, $state) {
  document.title = 'heroes - selection'; //set the page title
  $scope.page = 1;
  $scope.addMoreJobs = function(){

    var job = $('#jobName').val();
    var location = $('#locationName').val();

    $.getJSON('../api/selection/' + job + '/' + location + '/' + $scope.page++)
      .success(function(data) {

        console.log(data.results);
        $scope.jobsData.push(data.results);
        $scope.$apply();

        //stack the job listings
        $('#gridDisplay').packery({
          // options
          itemSelector: '.job',
          gutter: 1
        });
      })
      .error(function(error){
        console.log('error:');
        console.log(error);
      });

  };
}])

heroesApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {
  document.title = 'heroes - contact'; //set the page title
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
