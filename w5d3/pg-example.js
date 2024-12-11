// IMPORT !?!?!
// import pg from 'pg'
const pg = require("pg")

// JS! Web browser only <script>

// Node! CommonJS patterns (require) (sync)

// ESM => ES modules (import) (async)


const { Client } = pg
const client = new Client()

// AWAIT !?!?!
// Syntax Sugar for promises
await client.connect()
 
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()