const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

// Sets port to .env variable if local connection not available
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(routes)


// Only begins listening on port once db connection is open
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`)
})


