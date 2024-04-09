const express = require ("express")
const User = require ("./sample.json")
const app = express()
const port = 8000

//Display all users
app.get ("/User", (req,res) =>{
return res.json(User)
})

app.listen(port, (err) =>{
    console.log(`App is running in port ${port}`)
})