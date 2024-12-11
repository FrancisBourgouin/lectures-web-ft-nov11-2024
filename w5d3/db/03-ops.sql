SELECT * FROM authors;

SELECT
  jokes.*,
  authors.name AS author_name,
  authors.funny AS author_funny,
  authors.description AS author_description
FROM jokes 
LEFT JOIN authors 
  ON jokes.author_id = authors.id;

SELECT * 
FROM jokes 
JOIN authors 
  ON jokes.author_id = authors.id 
WHERE jokes.id = 1;

INSERT INTO jokes
  (question, answer, rating, author_id)
VALUES
  ('Little potato?','Big potato!',5,3);