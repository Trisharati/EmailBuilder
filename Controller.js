let templateModel = require('./Schema')

let GetTemplate = async(req,res)=>{
    let details = await templateModel.find()
    console.log('detail',details);
    if(details.length >0){
        res.status(200).json({tem:details[0]})
    }
    else{
        res.status(400).json({msg:'Data not found'})
    }
}

module.exports = {GetTemplate}