//import dotenv file
require('dotenv').config();

//1. import express
const express = require('express')

//5. import cors
const cors = require('cors')

//8. import express
const route = require('./router/route')

//import db
const db = require('./config/db')

//2. Create a server app using express
const ContactSerever = express()

//6. implementing cors
ContactSerever.use(cors())

//7. implementing middleware
ContactSerever.use(express.json()) //Returns middleware that only parses json
// kalaSerever.use(appMiddleware)
ContactSerever.use(route)

//3. Define post
const PORT = process.env.PORT || 3000

//4. Serever Listen
ContactSerever.listen(PORT, ()=>{
    console.log("Contact Server Listening on the port", PORT);
})