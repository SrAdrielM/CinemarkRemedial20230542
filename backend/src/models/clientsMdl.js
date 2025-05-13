/*
    nombre
    correo
    telefono
    direccion
    activo
*/

import {Schema, model} from "mongoose";

const clientsSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            reuqire: true
        },
        telephone: {
            type: String,
            require: true
        },
        address: {
            type: String,
            require: true
        },
        active: {
            type: Boolean,
            require: true
        }
    }, {
        timestamps: true,
        strict: false
    }
);

export default model("clients", clientsSchema);