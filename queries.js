
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'spielcenter',
  password: 'test',
  port: 5432,
})




// Register user

const registerUser = (request, response)=> {
  const {user_firstname, user_lastname, user_email, password} = request.body;

  pool.query('INSERT INTO "user" (user_firstname, user_lastname, user_email, password) VALUES ($1, $2, $3, $4) RETURNING id' , [user_firstname, user_lastname, user_email, password], (error,results) => {
      if (error){
         throw error;
      }
      response.status(201).send(`User added with id:${results.rows[0].id}`)

  })
}


// Login user






/**Customer Table GET/POST/PUT/DELETE*/

const getCustomer = (request, response) => {
  pool.query('SELECT * FROM customer ORDER BY customer_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



const getCustomerById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM customer WHERE customer_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



const createCustomer = (request, response)=> {
    const {firstname, lastname, telefon} = request.body;

    pool.query('INSERT INTO customer (firstname, lastname, telefon) VALUES ($1, $2, $3) RETURNING customer_id' , [firstname, lastname, telefon], (error,results) => {
        if (error){
           throw error;
        }
        response.status(201).send(` Customer added with customer_id:${results.rows[0].customer_id} `)

    })
}



const updateCustomer = (request, response) => {
  const id = parseInt(request.params.id)
  const { firstname, lastname, telefon } = request.body

  pool.query(
    'UPDATE customer SET firstname = $1, lastname = $2, telefon = $3 WHERE customer_id = $4',
    [firstname, lastname, telefon, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Customer modified with ID: ${id}`)
    }
  )
}

/** Wichtige Funktion */
// wenn man die Kunde löscht, wird auch die Reservierung von diese kunde gelöscht

const deleteCustomer = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM customer WHERE customer_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Customer deleted with ID: ${id}`)
  })
}




/**Reservation Table GET/POST/PUT/DELETE*/


//diese Funktion ist nicht notwendig, listet nur reservationstabelle, ohne andere Tabelen
const getReservation = (request, response) => {
  pool.query('SELECT * FROM reservation ORDER BY reservation_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


/** wichtige Function */
// Reservation mit ID ausgeben mit alle informationen aus andere Tabellen
const getReservationById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(' select * from "reservation" as r inner join "customer" as c on r."customer_id"=c."customer_id" inner join "gameroom" as gm on r."room_id"=gm."room_id"  where reservation_id = $1 ', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


/** Wichtige Funktion */
// Liste von alle Reservation mit alle Informationen (mit kunde id, vorname, nachname, telefon, raum id, raum name, zusetzliches raum, datum, spielzeit)
const getReservationList = (request, response) => {
  pool.query('select * from "reservation" as r inner join "customer" as c on r."customer_id"=c."customer_id" inner join "gameroom" as gm on r."room_id"=gm."room_id" ', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



// Reservation hinzufügen
const createReservation = (request, response)=> {
  const {customer_id, room_id, res_date, start_time, end_time} = request.body;

  pool.query('INSERT INTO reservation (customer_id, room_id, res_date, start_time, end_time) VALUES ($1, $2, $3, $4, $5) RETURNING reservation_id' , [customer_id, room_id, res_date, start_time, end_time], (error,results) => {
      if (error){
         throw error;
      }
      response.status(201).send(` Reservation added with reservation_id:${results.rows[0].reservation_id} `)

  })
}



/** Wichtige Funktion */
// updatet reservations Datun, Zeit und spielraum. Beim Update kann nur die reservierungsdaten updaten. kunde muss man nicht updaten, weil die name bleibt gleich
const updateReservation = (request, response) => {
  const id = parseInt(request.params.id)
  const { room_id, res_date, start_time, end_time } = request.body

  pool.query(
    'UPDATE reservation SET room_id = $1, res_date = $2, start_time = $3, end_time = $4  WHERE reservation_id = $5',
    [room_id, res_date, start_time, end_time, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`reservation modified with ID: ${id}`)
    }
  )
}



const findByName = (request, response) => {
  const lastname = parseInt(request.params.lastname)

  pool.query('SELECT * FROM customer WHERE lastname = $1', [lastname], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}






module.exports = {
  registerUser,
  getCustomer,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getReservation,
  getReservationById,
  getReservationList,
  createReservation,
  updateReservation,
  findByName
}



