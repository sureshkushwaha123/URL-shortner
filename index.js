const express = require('express');
const {connectToMongooseDB}=require('./connect');

const urlRoute=require("./routes/url");
const URL=require('./models/url');
const aap=express();
const port=8001;

connectToMongooseDB('mongodb://localhost:27017//short-url')
.then(()=>console.log("mongodb connected "));
aap.use(express.jason());
aap.use("/url",urlRoute);
app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    const entry =await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory: {
            timestamp:Date.now(),
        },
    },
}
);
res.redirect(entry.redirectURL)
});
aap.listen(port,()=>console.log("server started at port:${port}"));