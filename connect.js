const mongoose=require('mongoose')
mongoose.set("strictQuery",true);
async function connectToMongoose(url){
    return mongoose.connect(url);
}

module.export={
    connectToMongoose
}