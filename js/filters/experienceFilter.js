// Filter from kayakDave's answer on Stack Overflow at http://stackoverflow.com/questions/20292638/angular-filter-exactly-on-object-key
app.filter('expFilter', function() {
// pass through inputs as array, obj in index, then values from ng-repeat
  return function(inputs, values) {
    // array to store filtered results
    var output = [];
    // loop through inputs
    angular.forEach(inputs, function(input) {
      // loop through values
      angular.forEach(values, function(value) {
        if (input.id === value) {
          output.push(input);
        }
      });

// alternate method, not using nested loop
      // if( values.indexOf(input.id) !== -1){
      //   output.push(input);
      // }
    });
// return filtered array
    return output;
  }

});
