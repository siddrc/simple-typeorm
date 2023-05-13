const EntitySchema = require("typeorm").EntitySchema


module.exports =  new EntitySchema({
    name: "schools", // Will use table name `post` as default behaviour.
    tableName: "schools", // Optional: Provide `tableName` property to override the default behaviour for table name.
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        name: {
            type: "varchar",
        },
        abbreviation: {
            type: "text",
        },
    },
    
})
