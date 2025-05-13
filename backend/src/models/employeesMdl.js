/*
nombre
correo
telefono
direccion
puesto
fecha de contratacion
salario
activo
*/

import {Schema, model} from "mongoose";

const employeesSchema = new Schema (
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
        position: {
            type: String,
            require: true
        },
        hireDate: {
            type: Date,
            require: true
        },
        salary: {
            type: Number,
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

export default model("employees", employeesSchema)