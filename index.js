var appRootPath = require('app-root-path');
var path = require('path');

function Include(includePath)
{
    var requirePath = '';
    if(includePath[0] == "."){
        //
        requirePath = path.join(__dirname, includePath);
        console.log(requirePath);
    }
    else{
        //
        requirePath = path.join(appRootPath.path, includePath);
        console.log(requirePath);
    }
    return require(requirePath);
}

exports = module.exports = function(includePath) {
    //
    return Include(includePath);
};

global.Include = exports;