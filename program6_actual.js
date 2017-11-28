var module = require('./program6_module.js');

var callback = function(err , data){
  if(err){
    console.log(err);
  }
  else {
    for(var i=0; i< data.length;i++){
      console.log(data[i]);
    }
  }
};

module(process.argv[2] , process.argv[3] , callback);
//-------official solution-----------
/* var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })

*/
