const db = require("./db")

const getAllAuthors = () => {
  return db
    .query("SELECT * FROM authors")
    .then(dbRes => dbRes.rows)


  // const mockData = [
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
  //   },
  //   {
  //     id: 3,
  //     name: 'Mike',
  //     funny: true,
  //     description: 'A student in march01'
  //   }
  // ]

  // return Promise.resolve(mockData)
}

module.exports = { getAllAuthors }