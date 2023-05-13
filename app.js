require("reflect-metadata")
require('dotenv').config()
const { connect } = require("./app-data-source")
const express = require("express")
const { schoolsRouter } = require("./schools/schools.router")
const { usersRouter } = require("./users/users.router")
const { authorise } = require("./authorisation/jwt.authorisation.middleware")

const app = express()
app.use(express.json())
connect()


app.get("/isAlive", (req,res)=>res.send(`I am alive`))
app.use("/api/*", authorise)
app.use("/api/schools", schoolsRouter)
app.use("/users", usersRouter)



const port = process.env.PORT || 8081
app.listen(port)


