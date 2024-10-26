const express = require('express')
const bodyparser = require('body-parser')
const expresshand = require('express-handlebars')
const path = require('path')
const mysql = require('mysql')

const app = express()

require('dotenv').config()

const port = process.env.PORT || 2004

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(express.static('public'))

const handlebars = expresshand.create({extname:".hbs"})
app.engine('hbs',handlebars.engine)
app.set("views engine","hbs")


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public','views','layouts','main.hbs'))
    // res.render('main')
})

app.get('/vp',(req,res) => {
    res.render('home.hbs')
})


app.listen(port,() => {
    console.log("Server running at http://localhost:2004")
})

