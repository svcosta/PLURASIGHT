module.exports = function(app){
    app.factory("bandList",function(){
        return[
            {name:"Carol Cunha", formed:1988},
            {name:"Sergio", formed:1983}
        ]
    });
}