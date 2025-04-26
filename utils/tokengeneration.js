const jwt =require('jsonwebtoken')
const generatingtokens=(id)=>{return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1h'})}
module.exports={generatingtokens}
 const genrattoken = (id)=>{return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})}
 module.exports={genrattoken}