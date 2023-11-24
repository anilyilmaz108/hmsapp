const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'db4free.net',
    user: 'anilyilmaz',
    password: 'fsy7th54pzhfh',
    database: 'hms_app_db'
})

    //USER CRUD OPERATIONS
    //get all users
    const getUsers = (request, response) => {
        const sql = 'select * from users';
        db.query(sql, (err, result)=> {
            if(err){
                response.send(err);
            }else{
                response.send(result);
            }
        })
    }
    
  //get user by id
  const getUserById = (request, response) => {
    const sql = 'select * from users where id = ?';
    const params = [request.params.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send(result);
        }
    })
  }



  //create user
  const createUser = (request, response) => {
    const reqBody = request.query;
    const sql = 'insert into users values(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const params = [reqBody.role, reqBody.name, reqBody.surname, reqBody.about, reqBody.image, reqBody.email, reqBody.phone, reqBody.department, reqBody.salary, reqBody.started, reqBody.address, reqBody.staff];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send(
                {
                    status: '200',
                    messagde: 'user added'
                }
            )
        }
    })
  } 

  //update user
  const updateUser = (request, response) => {
    const reqBody = request.query;
    const sql = 'update users set role = ?, name = ?, surname = ?, about = ?, image = ?, email = ?, phone = ?, department = ?, salary = ?, started = ?, address = ?, staff = ? where id = ?';
    const params = [reqBody.role, reqBody.name, reqBody.surname, reqBody.about, reqBody.image, reqBody.email, reqBody.phone, reqBody.department, reqBody.salary, reqBody.started, reqBody.address, reqBody.staff, reqBody.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send({
                status: '200',
                message: 'success updated'
            })
        }
    })
  }

  //delete user by id
  const deleteUser = (request, response) => {
    const reqBody = request.query;
    const sql = 'Delete from users where id = ?';
    const params = [reqBody.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send({
                status: '200',
                message: 'success deleted'
            })
        }
    })
  }


  //FEEDBACK CRUD OPERATIONS
    //get all feedbacks
    const getFeedbacks = (request, response) => {
        const sql = 'select * from feedback';
        db.query(sql, (err, result)=> {
            if(err){
                response.send(err);
            }else{
                response.send(result);
            }
        })
    }
    
  //get feedbacks by id
  const getFeedbacksById = (request, response) => {
    const sql = 'select * from feedback where id = ?';
    const params = [request.params.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send(result);
        }
    })
  }

  //create feedbacks
  const createFeedbacks = (request, response) => {
    const reqBody = request.query;
    const sql = 'insert into feedback values(null, ?, ?, ?, ?, ?, ?)';
    const params = [reqBody.user_id, reqBody.name, reqBody.surname, reqBody.title, reqBody.description, reqBody.date];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send(
                {
                    status: '200',
                    messagde: 'feedback added'
                }
            )
        }
    })
  }

  //update feedbacks
  const updateFeedbacks = (request, response) => {
    const reqBody = request.query;
    const sql = 'update feedback set user_id = ?, name = ?, surname = ?, title = ?, description = ?, date = ? where id = ?';
    const params = [reqBody.user_id, reqBody.name, reqBody.surname, reqBody.title, reqBody.description, reqBody.date, reqBody.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send({
                status: '200',
                message: 'success updated'
            })
        }
    })
  }

  //delete feedbacks by id
  const deleteFeedbacks = (request, response) => {
    const reqBody = request.query;
    const sql = 'Delete from feedback where id = ?';
    const params = [reqBody.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send({
                status: '200',
                message: 'success deleted'
            })
        }
    })
  }


    //APPOINTMENT CRUD OPERATIONS
    //get all appointments
    const getAppointments = (request, response) => {
        const sql = 'select * from appointment';
        db.query(sql, (err, result)=> {
            if(err){
                response.send(err);
            }else{
                response.send(result);
            }
        })
    }
    
  //get appointments by id
  const getAppointmentsById = (request, response) => {
    const sql = 'select * from appointment where id = ?';
    const params = [request.params.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send(result);
        }
    })
  }

  //create appointments
  const createAppointments = (request, response) => {
    const reqBody = request.query;
    const sql = 'insert into appointment values(null, ?, ?, ?, ?, ?, ?, ?, ?)';
    const params = [reqBody.patient_id, reqBody.name, reqBody.surname, reqBody.phone, reqBody.email, reqBody.age, reqBody.date, reqBody.symptoms];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send(
                {
                    status: '200',
                    messagde: 'appointment added'
                }
            )
        }
    })
  }

  //update appointments
  const updateAppointments = (request, response) => {
    const reqBody = request.query;
    const sql = 'update appointment set patient_id = ?, name = ?, surname = ?, phone = ?, email = ?, age = ?, date = ?, symptoms = ? where id = ?';
    const params = [reqBody.patient_id, reqBody.name, reqBody.surname, reqBody.phone, reqBody.email, reqBody.age, reqBody.date, reqBody.symptoms, reqBody.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send({
                status: '200',
                message: 'success updated'
            })
        }
    })
  }

  //delete appointments by id
  const deleteAppointments = (request, response) => {
    const reqBody = request.query;
    const sql = 'Delete from appointment where id = ?';
    const params = [reqBody.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send({
                status: '200',
                message: 'success deleted'
            })
        }
    })
  }

      //PAYMENT CRUD OPERATIONS
    //get all payments
    const getPayments = (request, response) => {
        const sql = 'select * from payment';
        db.query(sql, (err, result)=> {
            if(err){
                response.send(err);
            }else{
                response.send(result);
            }
        })
    }
    
  //get payments by id
  const getPaymentsById = (request, response) => {
    const sql = 'select * from payment where id = ?';
    const params = [request.params.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send(result);
        }
    })
  }

  //create payments
  const createPayments = (request, response) => {
    const reqBody = request.query;
    const sql = 'insert into payment values(null, ?, ?, ?, ?, ?, ?, ?, ?)';
    const params = [reqBody.payment_id, reqBody.patient_id, reqBody.name, reqBody.surname, reqBody.doctor_name, reqBody.salary, reqBody.date, reqBody.operations];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send(
                {
                    status: '200',
                    messagde: 'payment added'
                }
            )
        }
    })
  }

  //update payments
  const updatePayments = (request, response) => {
    const reqBody = request.query;
    const sql = 'update payment set payment_id = ?, patient_id = ?, name = ?, surname = ?, doctor_name = ?, salary = ?, date = ?, operations = ? where id = ?';
    const params = [reqBody.payment_id, reqBody.patient_id, reqBody.name, reqBody.surname, reqBody.doctor_name, reqBody.salary, reqBody.date, reqBody.operations, reqBody.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send({
                status: '200',
                message: 'success updated'
            })
        }
    })
  }

  //delete payments by id
  const deletePayments = (request, response) => {
    const reqBody = request.query;
    const sql = 'Delete from payment where id = ?';
    const params = [reqBody.id];
    db.query(sql, params, (err, result)=> {
        if(err){
            response.send(err);
        }else{
            response.send({
                status: '200',
                message: 'success deleted'
            })
        }
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser, 
    updateUser,
    deleteUser,

    getFeedbacks,
    getFeedbacksById,
    createFeedbacks, 
    updateFeedbacks,
    deleteFeedbacks,

    getAppointments,
    getAppointmentsById,
    createAppointments, 
    updateAppointments,
    deleteAppointments,

    getPayments,
    getPaymentsById,
    createPayments, 
    updatePayments,
    deletePayments,
  }