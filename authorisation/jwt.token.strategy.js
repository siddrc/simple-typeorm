const jwt = require("jsonwebtoken")

const PAYLOAD = { foo: 'bar' }
function issueToken(){
    const token  = jwt.sign(PAYLOAD, 'shhhhh');
    return token;
}

function validateToken(token){
    console.log(`:::: In validate token :::: ${token}`)
    const decoded = jwt.verify(token, 'shhhhh');
    if (decoded.toString() === PAYLOAD.toString())
     return true;
    else 
     return false


}

module.exports = {
    issueToken,
    validateToken
}