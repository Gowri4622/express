const express = require('express')
const app=express()
const about = require('./about.js')
const service = require('./service.js')
const branch = require('./branch.js')
const home = require('./home.js')
const contact = require('./contactus.js')
const post = require('./post.js')


app.use(express.urlencoded({extended : true}))

app.get('/',(request,response)=>{
    response.render('index')
})
app.set('view engine', 'ejs')



app.use('/about',about)
app.use('/service',service)
app.use('/branch',branch)
app.use('/home',home)
app.use('/contact',contact)
app.use('/post',post)

app.listen(3500)