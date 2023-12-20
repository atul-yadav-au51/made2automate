const express= require('express')
const ejs= require('ejs')
const app = express()

app.get('/',(req,res)=>{
    res.render('homepage')
})

app.get('/product',(req,res)=>{
    res.render('products')
})


app.use('/static',express.static("public"))
app.set('view engine','ejs')



PORT= 3000
app.listen(PORT,()=>{
    console.log("server created")
})