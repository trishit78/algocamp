const isAdminMiddleware = (req,res,next)=>{
    const {role} = req.userInfo.role;
    if(role ==='admin'){
        console.log('user is admin');
        next();
    }else{
        res.json({
            success:false,
            msg:"this is admin only page"
        })
    }

}

module.exports = isAdminMiddleware;