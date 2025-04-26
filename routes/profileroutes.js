const express=require('express')
const {getProfile}=require('../contrllers/authcontrol')
const{protect}= require('../middlewares/auth')
const router=express.Router()
router.get('/',protect,getProfile)
module.exports=router