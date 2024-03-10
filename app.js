const express = require('express')
const app =new express()

app.get('/', function (req, res) {
  res.send('Hello my dears ')
})
app.get('/home/:id/:name', function (req, res) {
    let value=req.params
    console.log (value)
    res.send('home')
  })
  
app.listen(3000,()=>{
    console.log("runing")
})