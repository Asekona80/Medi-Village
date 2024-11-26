const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  doctorName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String },
});

const AppointmentModel = mongoose.model("MachubeniClinic", appointmentSchema);
module.exports = AppointmentModel