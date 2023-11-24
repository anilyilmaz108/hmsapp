const express = require('express');
const app = express();
var cors = require("cors");
port = 3306;
const db = require('./queries')
//Swagger Integration
var swaggerUi = require('swagger-ui-express');
    
swaggerDocument = require('./swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3306");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

  var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.get("/", (req,res) => {
    res.send('success');
})

//USER CRUD OPERATIONS
app.get('/users', cors(corsOptions), db.getUsers)
app.get('/users/:id', cors(corsOptions), db.getUserById)
app.post('/users', cors(corsOptions), db.createUser)
app.put("/users", cors(corsOptions), db.updateUser)
app.delete("/users", cors(corsOptions), db.deleteUser)

//FEEDBACK CRUD OPERATIONS
app.get('/feedbacks', cors(corsOptions), db.getFeedbacks)
app.get('/feedbacks/:id', cors(corsOptions), db.getFeedbacksById)
app.post('/feedbacks', cors(corsOptions), db.createFeedbacks)
app.put("/feedbacks", cors(corsOptions), db.updateFeedbacks)
app.delete("/feedbacks", cors(corsOptions), db.deleteFeedbacks)

//APPOINTMENT CRUD OPERATIONS
app.get('/appointments', cors(corsOptions), db.getAppointments)
app.get('/appointments/:id', cors(corsOptions), db.getAppointmentsById)
app.post('/appointments', cors(corsOptions), db.createAppointments)
app.put("/appointments", cors(corsOptions), db.updateAppointments)
app.delete("/appointments", cors(corsOptions), db.deleteAppointments)

//PAYMENT CRUD OPERATIONS
app.get('/payments', cors(corsOptions), db.getPayments)
app.get('/payments/:id', cors(corsOptions), db.getPaymentsById)
app.post('/payments', cors(corsOptions), db.createPayments)
app.put("/payments", cors(corsOptions), db.updatePayments)
app.delete("/payments", cors(corsOptions), db.deletePayments)



app.listen(port, () => {
    console.log(`Connection success to ${port} Port`);
})