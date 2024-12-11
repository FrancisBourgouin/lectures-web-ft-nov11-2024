const pg = require("pg")
const { Client } = pg

const client = new Client({
  host:"localhost",
  database:"nov_jokes",
  user:"labber",
  password:"labber",
  port:5432
})



// [
//   {
//     id: 1,
//     name: 'Francis',
//     funny: true,
//     description: 'Oh boy, he is a teacher'
//   },
//   {
//     id: 2,
//     name: 'Paul',
//     funny: true,
//     description: 'A student in march01'
//   }
// ]


const outputAuthorInfo = (author) => {
  console.log("💫🌟🌠✨🌠🌟⭐🌟✨")
  console.log(`${author.name}, they are ${author.funny ? "funny" : "not funny"}.`)
  console.log("💫🌟🌠✨🌠🌟⭐🌟✨\n\n")
}

const outputAllAuthorInfo = (authors) => authors.forEach(outputAuthorInfo)

const extractRows = (dbRes) => dbRes.rows

const reportError = (err) => console.log("(╯°□°）╯︵ ┻━┻", err)

const closeConnection = () => {
  console.log("Work is done, goodbye")
  client.end()
}

const executeQuery = (queryString) => {
  return client.query(queryString)
}

const fetchAllAuthors = () => executeQuery("SELECT * FROM authors")

client
  .connect()
  .then(fetchAllAuthors)
  .then(extractRows)
  .then(console.log)
  .catch(reportError)
  .finally(closeConnection)
