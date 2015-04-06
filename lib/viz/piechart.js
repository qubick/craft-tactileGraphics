var jade = require('jade')

module.exports = function(data, options){
    return jade.renderFile(__dirname + '/templates/piechart3d.jade', {data: data})
}
