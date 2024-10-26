const express = require('express')
const bodyparser = require('body-parser')
const expresshand = require('express-handlebars')
require('dotenv').config

const port = 2004
const app = express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(express.static("public"))






app.listen(port,(err)=> {
    if(err){
        console.log("Error...")
    }
    console.log("Server Running At Port http://localhost:2004")
})
