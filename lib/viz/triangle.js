var jade = require('jade')

module.exports = function(data, options){
    return jade.renderFile(__dirname + '/templates/triangle3d.jade', {data: data})
}
