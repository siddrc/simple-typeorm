require("reflect-metadata")
require('dotenv').config()
const { connect } = require("./app-data-source")
const express = require("express")
const { schoolsRouter } = require("./schools/schools.router")
const app = express()
app.use(express.json())
connect()


app.get("/isAlive", (req,res)=>res.send(`I am alive`))
app.use("/schools", schoolsRouter)


const port = process.env.PORT || 8081
app.listen(port)


