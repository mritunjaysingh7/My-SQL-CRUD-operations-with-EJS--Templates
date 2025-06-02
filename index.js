const express=require("express")
const dotenv=require('dotenv')
const router = require("./routes/router")
const db = require("./config/db")
const path = require('path')
const methodOverride = require('method-override')
const app=express()

app.use(methodOverride('_method'))



dotenv.config()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'pages'))


app.use('/api/v1',router)



db.getConnection((error)=>{
    if(error){
        console.log(error)
    }
    else{
    console.log("Database Connected Succesfully")
    }
})



app.listen(process.env.PORT,()=>{
    console.log("Server connected",process.env.PORT)
})

