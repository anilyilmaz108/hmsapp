const express = require('express');
const app = express();
const redis = require("redis"); //redis must be working on background
const client = redis.createClient(); //redis must be working on background
var cors = require("cors");
port = 3307; //Docker -> 3306 Redis -> 3307
const db = require('./queries')

//Redis -> Working on 127.0.0.1:6379
client.on("error",error => {
    console.error(error);
});


//Redis SET - GET
//Token İşlemleri için Kullanılabilir..
async function redisSetValue() {
    await client.connect()
    await client.set('token', 'co8ItzHSqq1uwAfrg4BAVLSTscgQqUTopzVJjBaT8Gos3ih52y24lY5VxGqVPCUt', {EX: 60 * 60 * 24}, function(err, success) {
        console.log("Success Operation", success); //Bir gün süreli token
    });
    const value = await client.get('token');
    console.log(value); 
  }
  redisSetValue();


//Redis HSET - HGET
//User - Appointment - Feedback - Payment bilgileri obje olarak Cache'de tutulabilir..
async function redisHSetValue() {
    //await client.connect()
    await client.hSet('user','name','test1', function(err, success) {
        console.log("Success Operation", success);
    });
    const value = await client.hGet('user','name');
    console.log(value); 
  }
  //redisHSetValue();


//Swagger Integration
var swaggerUi = require('swagger-ui-express');
    
swaggerDocument = require('./swagger.json');
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", ["http://localhost:3306","http://localhost:3307"]);
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