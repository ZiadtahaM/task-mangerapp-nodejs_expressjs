const getalltasks = (req,res)=>{
    res.send('send all taskre')
}
const creattask = (req,res)=>{
    res.send('created task')
}
 
const gettask = (req,res)=>{
    res.send('get task')
}
 
const upadtask = (req,res)=>{
    res.send('updated task')
}
const delettask = (req,res)=>{
    res.send('deleted task')
}
 
 
 module.exports={getalltasks,creattask,delettask,upadtask,gettask}