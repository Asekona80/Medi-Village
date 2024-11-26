const express = require("express")
const mongoose = require('mongoose')
const cors =require("cors")
const ClinicModel = require('./models/Clinic')
const AppModel = require('./models/Appointment')
const AppointmentModel = require("./models/Appointment")


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/MachubeniClinic");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    ClinicModel.findOne({ email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed ")
        }

    })

})
app.post('/register', (req, res) => {
    ClinicModel.create(req.body)
    .then(MachubeniClinic => res.json(MachubeniClinic))
    .catch(err => res.json(err))

})
app.post('/appointment', (req, res) => {
    AppointmentModel.create(re)

}) 


app.listen(3001, () => {
    console.log("server is running")
 
})