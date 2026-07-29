function errorMiddleware(error,req,res,next){
    res.json({
        message:error.message
    })
}

export {errorMiddleware}