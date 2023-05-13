

const schoolsRouter = require("express").Router();
const { connect } = require("../app-data-source")
const schoolsEntity = require("./schools.entity") 


schoolsRouter.get("/", async(req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        const schools = await connection.getRepository(schoolsEntity).find()
        status = 200;
        message = schools;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }
})

schoolsRouter.post("/", async(req,res)=>{
    let message = "", status;
    try{
        const connection = await connect()
        console.log(`::::::REQ BODY ${req.body}::::::::::`)
        const schoolsData = await connection.getRepository(schoolsEntity).create(req.body)
        const results = await connection.getRepository(schoolsEntity).save(schoolsData)
        status = 200;
        message = results;
    }catch(e){
        status = 500;
        message = e.message;
    }finally{
        res.status(status).send(message)
    }

    
})

schoolsRouter.put("/:id", (req,res)=>{


    
})

schoolsRouter.delete("/:id", (req,res)=>{


    
})

module.exports = {
    schoolsRouter
}
