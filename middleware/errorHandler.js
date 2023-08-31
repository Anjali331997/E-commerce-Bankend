
//not found
const notFound = (req,res,next)=>{
    const error = new Error(`Not Found : ${req.originalUrl}`);
    res.status(404);
    next(error);
}
//Error Handler
//https://dev.to/aneeqakhan/setup-error-middleware-and-async-handler-299i
//https://expressjs.com/en/guide/error-handling.html

const errorHandler = (err,req,res,next)=>{
    const statuscode = res.statusCode == 200 ? 500:res.statusCode;
    res.status(statuscode);
    res.send({
        message:err?.message,
        stack:err?.stack
    })
}

module.exports = {
    notFound,errorHandler
}