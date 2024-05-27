const express = require('express')
const { dbConnection } = require('./db');
var cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const { openapispec } = require('./spec');
const dotenv = require('dotenv')

dotenv.config();
const app = express()
const port = 5000

dbConnection()
app.get('/', (req, res) => {
  res.send('Hello My King')
})

app.use(express.json())     // this is added so that we can use json file as a response 
app.use(cors())

app.use('/api/user',require('./routes/user'))      
app.use('/api/admin',require('./routes/admin'))      
app.use('/api/place',require('./routes/place'))   
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(openapispec));   

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})