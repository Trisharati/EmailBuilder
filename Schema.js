const mongoose=require('mongoose')
const templateSchema = new mongoose.Schema({
    
    tem:{
        type:String        
    }   
})

module.exports = new mongoose.model('Templates',templateSchema,'Templates')