// three column filter
app.filter('expFilter', function() {
// pass through inputs as array, obj in index, then values from ng-repeat

  return function(inputs, value) {
    // array to store filtered results
    var output = [];
    if(inputs.length){

      angular.forEach(inputs, function(input) {
        if(input.id !== null){
          if(input.id % 3 === value){
            output.push(input);
          }
        }else{
          console.log("No Id for "+input.title);
        }
      });
    }else{console.log("No data");}

    return output;

  };
});
