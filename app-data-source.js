const { DataSource } =  require("typeorm")
let connection

const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [require("./schools/schools.entity"), 
               require("./users/users.entity")],
    logging: true,
    synchronize: true,
    ssl: true,
    extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
})
async function connect(){
    
    try{
      if(!appDataSource.isInitialized){
        connection = await appDataSource.initialize()
        return connection
      }else
        return connection
    }catch(e){
        console.error(`[ERROR] In connecting to database ${e.message}`)
    }
}



module.exports = {
    connect
}