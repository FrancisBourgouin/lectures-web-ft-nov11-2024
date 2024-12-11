const db = require("./db")

const getAllJokes = () => {
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
  return db.query(query).then(dbRes => dbRes.rows)

  // const mockData = [
  //   {
  //     id: 1,
  //     question: 'Knock knock, whos there, to who',
  //     answer: 'no, to whom',
  //     rating: 3,
  //     author_id: 1,
  //     author_name: 'Francis',
  //     author_funny: true,
  //     author_description: 'Oh boy, he is a teacher'
  //   },
  //   {
  //     id: 2,
  //     question: 'How is a bouncer at a club like a dish soap?',
  //     answer: 'They both DETER GENTS',
  //     rating: 5,
  //     author_id: 2,
  //     author_name: 'Paul',
  //     author_funny: true,
  //     author_description: 'A student in march01'
  //   },
  //   {
  //     id: 3,
  //     question: 'What do you call a belt made out of watches?',
  //     answer: 'A waist of time.',
  //     rating: 5,
  //     author_id: 3,
  //     author_name: 'Mike',
  //     author_funny: true,
  //     author_description: 'A student in march01'
  //   }
  // ]

  // return Promise.resolve(mockData)
}

const getJokeById = (jokeId) => {
  const query = `
  SELECT
    jokes.*,
    authors.name AS author_name,
    authors.funny AS author_funny,
    authors.description AS author_description
  FROM jokes 
  LEFT JOIN authors 
    ON jokes.author_id = authors.id
  WHERE jokes.id = $1;
  `
  const args = [jokeId]

  return db.query(query, args).then(dbRes => dbRes.rows[0])
}

const createJoke = (question, answer, rating, author_id) => {
  const query = `
  
  INSERT INTO jokes
    (question, answer, rating, author_id)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *  
    ;
  `

  const args = [question, answer, rating, author_id]

  return db.query(query, args).then(dbRes => dbRes.rows[0])

  // return Promise.resolve(mockData)
}

module.exports = {getAllJokes, getJokeById, createJoke}