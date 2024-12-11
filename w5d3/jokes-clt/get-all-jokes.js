const pg = require("pg")
const { Client } = pg

const client = new Client({
  host:"localhost",
  database:"nov_jokes",
  user:"labber",
  password:"labber",
  port:5432
})


const outputJokeInfo = (joke) => {
  console.log("💫🌟🌠✨🌠🌟⭐🌟✨")
  console.log(`Joke ID ${joke.id}`)
  console.log(`Question: ${joke.question}`)
  console.log(`Answer: ${joke.answer}`)
  console.log(`By: ${joke.author_name}`)
  console.log("💫🌟🌠✨🌠🌟⭐🌟✨\n")
}

const outputAllJokes = (jokes) => jokes.forEach(outputJokeInfo)

const extractRows = (dbRes) => dbRes.rows

const reportError = (err) => console.log("(╯°□°）╯︵ ┻━┻", err)

const closeConnection = () => {
  console.log("Work is done, goodbye")
  client.end()
}

const executeQuery = (queryString) => {
  return client.query(queryString)
}

const query = `
SELECT
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_funny,
  authors.description AS author_description
FROM jokes 
LEFT JOIN authors 
  ON jokes.author_id = authors.id;
`

const fetchAllJokes = () => executeQuery(query)

client
  .connect()
  .then(fetchAllJokes)
  .then(extractRows)
  .then(console.log)
  .catch(reportError)
  .finally(closeConnection)
