const express = require('express')

const app = express()


app.get('/terminator', (req,res)=>{
    res.send (`I'll be back`)
})

app.get('/tim-gunn',(req,res)=>{
    res.send('Make it work')
})

app.get('/Emeril', (req,res)=>{
    res.send (`Bam!`)
})

app.get('/Coach-Taylor', (req,res)=>{
    res.send (`Clear eyes, full hearts, can't Lose`)
})


app.get('/Homer-Simpson', (req,res)=>{
    res.send (`Book 'em Danno!`)
})

app.get('/Batman', (req,res)=>{
    res.send (`To the Batmobile!`)
})


app.get('/Fraiser', (req,res)=>{
    res.send (`I'm listening`)
})


app.get('/Regis', (req,res)=>{
    res.send (`Is that your final answer?`)
})


app.get('/Borg', (req,res)=>{
    res.send (`Resistance is futile`)
})

app.get('/zeus', (req,res)=>{
    res.send (`Release the Kraken`)
})


app.listen(3003,()=>{
    console.log('Listening on port 3003')
})