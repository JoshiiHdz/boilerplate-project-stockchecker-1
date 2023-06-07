var mongoose    = require('mongoose')

mongoose.Promise = global.Promise
const dbName = 'stock-price-database'
mongoose.connect(`${process.env.DB}${dbName}`, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', err => { console.error(err) })
db.once('open', () => {
  console.log('Connected to ' + dbName)
})

// Close MongoDB connection
process.on('SIGINT', () => {
  db.close(() => {
    console.log(`Closing connection to ${dbName}`)
    process.exit(0)
  })
})
