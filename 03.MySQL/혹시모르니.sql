-- Join
SELECT g.name, g.debut, s.title, s.lyrics
FROM song AS s
JOIN girl_group AS g
ON s.sid = g.hit_song_id;

-- Join (WHERE, BETWEEN)
SELECT g.name, g.debut, s.title
FROM girl_group AS g
JOIN song AS s
ON s.sid=g.hit_song_id
WHERE g.debut BETWEEN DATE('2009-01-01') AND DATE('2009-12-31')
ORDER BY g.debut;