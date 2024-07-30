const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module

const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://dhanalakshmisherugar14:8951422917@cluster0.73zhiux.mongodb.net/HospitalAppointment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a MongoDB schema and model for the form data
const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNo: String, // Changed from Number to String
  problem: String,
  appointmentDate: Date,
  appointmentTime: String,
});

const FormData = mongoose.model('FormData', formDataSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the entire project directory as static files
app.use(express.static(path.join(__dirname, '/')));

app.post('/', function (req, res) {
  // Create a new instance of the FormData model
  let formData = new FormData({
    name: req.body.name,
    email: req.body.email,
    contactNo: req.body.contactNo, // Corrected from contactno
    problem: req.body.problem,
    appointmentDate: req.body.appointmentDate,
    appointmentTime: req.body.appointmentTime,
  });

  formData.save()
    .then(() => {
      res.redirect("./Contact/Thankyou/thankyou.html");
    })
    .catch((error) => {
      res.status(500).send('Error saving form data.');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
