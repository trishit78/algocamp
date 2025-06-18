const jwt = require('jsonwebtoken');

const authMiddleware = async (req,res,next)=>{
    const authHeader = req.headers["authorization"];
    //console.log(authHeader);

    const token = authHeader && authHeader.split(" ")[1];

    console.log(token)
    if(!token){
        res.json({
            success:false,
              message:"access denied. please login"
        })
    }

    try {
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.userInfo = decodedToken;
        next();
    } catch (error) {
            res.json({
            success:false,
              message:"access denied. please login to join"
        })
    }

    
}

module.exports = authMiddleware;