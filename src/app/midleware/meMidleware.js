module.exports = function(res,req,next){
    req.locals._sort = {
        enable : false,
        type : "default",
        column : "name",
    }
 

    if(!req.locals._sort.hasOwnProperty("_sort")){
        Object.assign(req.locals._sort,{
            enable:true,
            type:"desc",
            column:"name"
        })
    }
    next()

}