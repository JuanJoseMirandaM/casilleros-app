const { Schema, model } = require('mongoose');

const casilleroSchema = new Schema(
    {
        vendedor:{type:String, default:""},
        bloque:{type:String},
        numero:{type:String},
        codigo:{type:String, unique: true, trim: true},
        precio:{type:Number},
        estado:{type:String, default:"D"},
        nombre:{type:String, default:"", uppercase:true},
        ci:{type: String, default:""},
        celular:{type: String, default:""},
        fecha:{type:Date, default:Date.now},
        createdAt:{type:Date, default:Date.now}
    }, {
        timestamps: true
    });

module.exports = model('Casillero', casilleroSchema);