const  jwt =require ('jsonwebtoken')
//middleware for jwt auth
exports.protect=(req,res,next)=>{
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //get tokens from headers
            token =req.headers.authorization.split('')[1]
            //verify token
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            //attach id to req 
            req.user={id:decoded.id}
            next()
        } catch (error) {
         console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
     if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Basic error handling middleware
exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Don't expose stack in production
  });

        }
    }
