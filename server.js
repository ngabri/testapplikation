/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./queries');
const { application } = require('express');
const { Pool } = require('pg');
const path  = require("path");
const port = 8080;
const cors = require('cors');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);




// configuration =================
app.use(express.static(path.join(__dirname, '/dist/projektApp')));
app.use(cors());

//application
app.get('/', function(req, res)
 {
    res.sendFile('index.html', { root: __dirname+'/dist/projektApp'});
 });



app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});


//Table user
app.post('/register', db.registerUser);
// Table customer
app.get('/customer', db.getCustomer);
app.get('/customer/:id', db.getCustomerById);
app.post('/customer', db.createCustomer);
app.put('/customer/:id', db.updateCustomer);
app.delete('/customer/:id', db.deleteCustomer);
//Table Reservation
app.get('/reservation', db.getReservation);
app.get('/reservation/:id', db.getReservationById);
app.get('/reservations', db.getReservationList);
app.post('/reservation', db.createReservation);
app.put('/reservation/:id', db.updateReservation);
app.get('/reservation:', db.findByName);


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});






