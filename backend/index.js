const express = require ('express')
const mongoose = require('mongoose');
const User = require('./model/user')



const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://mng:sn7Zhef8oA591vNn@cluster0.np3i0c9.mongodb.net/mng?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'))


app.post('/account', (req, res) => {
    console.log(req.body)

    let user = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        dateofbirth:req.body.dateofbirth,
        idno:req.body.idno
    }).save()
//   res.send('Hello World')
})

app.listen(5000)