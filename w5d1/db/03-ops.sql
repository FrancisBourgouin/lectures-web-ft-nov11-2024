-- Basic select

SELECT * FROM jokes;

SELECT * FROM authors;

select * from jokes; -- BAD PERSONS DO THAT! DONT BE A BAD PERSON!

-- Where

SELECT * FROM jokes WHERE id > 5;
SELECT * FROM jokes WHERE id = 5;

SELECT * FROM jokes WHERE question LIKE 'What%'; --Kinda bad, following capitalization is a pain

SELECT * FROM jokes WHERE LOWER(question) LIKE 'what%'; -- Kinda cool, but we can do better

SELECT * FROM jokes WHERE question ILIKE 'what%'; --Awesome! But only for PostgreSQL...

SELECT * FROM jokes WHERE question ILIKE 'what%' AND (question ILIKE '% a %' OR question ILIKE 'a %');

SELECT * 
FROM jokes 
WHERE question ILIKE 'what%' 
AND (question ILIKE '% a %' OR question ILIKE 'a %')
;

SELECT question, answer
FROM jokes
;

SELECT jokes.question, jokes.answer -- Too wordy! Still works
FROM jokes
;


SELECT * 
FROM jokes 
-- FULL OUTER JOIN authors 
-- RIGHT JOIN authors 
LEFT JOIN authors 
  ON authors.id = jokes.author_id;
-- WHERE ...


-- SELECT * FROM jokes;

SELECT 
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_is_funny,
  authors.description AS author_description
FROM jokes
LEFT JOIN authors 
  ON authors.id = jokes.author_id;

SELECT 
  jokes.id,
  jokes.question,
  jokes.answer,
  jokes.rating,
  jokes.author_id AS "authorId",
  authors.name AS "authorName",
  authors.funny AS "authorIsFunny",
  authors.description AS "authorDescription"
FROM jokes
LEFT JOIN authors 
  ON authors.id = jokes.author_id;


SELECT 
  AVG(rating), MAX(rating), MIN(rating), author_id
FROM jokes
WHERE author_id IS NOT NULL
GROUP BY author_id
;

SELECT author_id
FROM jokes
WHERE author_id IS NOT NULL -- Pre process of aggregate functions
GROUP BY author_id -- 
HAVING AVG(rating) > 4
;

-- I WANT TO SEE THE JOKES FROM THE COOL AUTHORS
-- NESTED SELECT!

SELECT 
  jokes.id,
  jokes.question,
  jokes.answer,
  jokes.rating,
  jokes.author_id AS "authorId",
  authors.name AS "authorName",
  authors.funny AS "authorIsFunny",
  authors.description AS "authorDescription"
FROM jokes
LEFT JOIN authors 
  ON authors.id = jokes.author_id
WHERE author_id IN (
  SELECT author_id
  FROM jokes
  WHERE author_id IS NOT NULL 
  GROUP BY author_id 
  HAVING AVG(rating) > 4
)
;

-- VIEWS ! :D
-- Essentially a read-only table

DROP VIEW IF EXISTS cool_author_ids;
CREATE VIEW cool_author_ids AS (
  SELECT author_id
  FROM jokes
  WHERE author_id IS NOT NULL 
  GROUP BY author_id 
  HAVING AVG(rating) > 4
);


SELECT 
  jokes.id,
  jokes.question,
  jokes.answer,
  jokes.rating,
  jokes.author_id AS "authorId",
  authors.name AS "authorName",
  authors.funny AS "authorIsFunny",
  authors.description AS "authorDescription"
FROM jokes
LEFT JOIN authors 
  ON authors.id = jokes.author_id
WHERE author_id IN ( SELECT * FROM cool_author_ids )
;

DROP VIEW IF EXISTS jokes_by_cool_authors;
CREATE VIEW jokes_by_cool_authors AS (
  SELECT 
  jokes.id,
  jokes.question,
  jokes.answer,
  jokes.rating,
  jokes.author_id AS "authorId",
  authors.name AS "authorName",
  authors.funny AS "authorIsFunny",
  authors.description AS "authorDescription"
FROM jokes
LEFT JOIN authors 
  ON authors.id = jokes.author_id
WHERE author_id IN ( SELECT * FROM cool_author_ids )

);
-- someObj.name
-- someObj["name"]
-- {a:1, b:2, a:5}

-- SELECT question, answer FROM jokes;

-- JOIN!



-- AGGREGATE FUNCTIONS!



-- VIEW! - READONLY TABLE ( KINDA )

-- const bob = {a:1, b:1, a:2}

-- Renaming fields

-- Filter out some results

-- Ordering results

-- Filter based of text

-- Joining tables

-- Potential problems when working with JavaScript

-- AGGREGATE FUNCTIONS

-- AGGREGATES + Nested selects !