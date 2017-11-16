// ------------My Solution ------------

var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir , function(err , data){
  if(err){
    console.log('err' + err);
  }
  else {
    for(var i = 0; i < data.length ; i++){
      //var list[i] = data[i];
      if(path.extname(data[i]) == "."+ext){
        console.log(data[i]);
      }
    }
  }
})

//-------------Official solution-------------
/*var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/
