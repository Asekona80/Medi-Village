const mongoose = require('mongoose')

const ClinicSchema = new mongoose. Schema({
    name: String,
    email: String,
    password: String

})
const ClinicModel = mongoose.model("MachubeniClinic", ClinicSchema)
module.exports = ClinicModel