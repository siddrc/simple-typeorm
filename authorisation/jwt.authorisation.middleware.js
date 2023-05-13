
const { validateToken } = require("./jwt.token.strategy")
function authorise(req,res,next){
    const token = req.get("WBS_TOKEN")
    console.log(`:::: In authorise :::: ${token}`)
     if(token && validateToken(token))
      next()
     else
      res.status(403).send(`Forbidden`)
}

module.exports = { 
    authorise
}