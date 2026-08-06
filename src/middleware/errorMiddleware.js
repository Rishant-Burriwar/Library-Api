function errorMiddleware(error,req,res,next){
    res.json({
        sucess:false,
        message:error.message
    })
}

export {errorMiddleware}