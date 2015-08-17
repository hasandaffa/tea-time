var appRootPath = require('app-root-path');
var path = require('path');

function Include(includePath)
{
    var requirePath = '';
    if(includePath[0] == "."){
        //
        requirePath = path.join(__dirname, includePath);
    }
    else if(includePath[0] == "/"){
        //
        requirePath = path.join(appRootPath.path, includePath);
    }
    else{
        requirePath = includePath;
    }
    return require(requirePath);
}

exports = module.exports = function(includePath) {
    //
    return Include(includePath);
};

global.Include = exports;