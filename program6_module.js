var fs = require('fs');
var path = require('path');

function list_file(dirname , ext , callback){

      fs.readdir(dirname , function(err , data){
        if(err){
          return callback(err);
        }
        else{
          data = data.filter(function (file){
            return path.extname(file) === "."+ext;
          });
        callback(null , data);
        }
      });
};

module.exports = list_file;

/*----------Official solution--------------
var fs = require('fs')
    var path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }

*/
