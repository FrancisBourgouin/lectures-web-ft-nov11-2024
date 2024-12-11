const pg = require("pg")
const { Client } = pg

const db = new Client({
  host:"localhost",
  database:"nov_jokes",
  user:"labber",
  password:"labber",
  port:5432
})


db
  .connect()
  .then(() => console.log("DATABASE IS READYYYYY"))

module.exports = db