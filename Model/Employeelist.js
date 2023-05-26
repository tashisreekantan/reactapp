const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        location: String,
        position: String,
        salary: Number
    }
)

const employeeModel = mongoose.model(
    "employelists", employeeSchema
)

module.exports = {employeeModel}