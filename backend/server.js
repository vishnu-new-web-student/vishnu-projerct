import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"

import {User} from "../components/user.js" 
console.log(User)
 

const app = express()
const port = 3000


mongoose.connect('mongodb://localhost:27017/don')
    .then(() => {
        console.log("connection done")
    })
    .catch(() => {
        console.log("connection done")
    })


app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', async (req, res) => {
    const user = new User
   
   (req.body).save()
   
console.log(req.body)
    
    res.send('Hello World!')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
