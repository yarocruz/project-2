USE poddler_db;

INSERT INTO poddler_db.Users (email, password, username, createdAt, updatedAt) VALUES ('yoda@jedi.com', 'yoda1234', 'yoda1234', '2020-04-13 7:20:45', '2020-04-14 7:20:45');
INSERT INTO poddler_db.Users (email, password, username, createdAt, updatedAt) VALUES ('luke.skywalker@jedi.com', 'luke1234', 'luke1234','2020-04-13 7:20:45','2020-04-14 7:20:45');
INSERT INTO poddler_db.Users (email, password, username, createdAt, updatedAt) VALUES ('darth.varder@sith.com', 'padme1234', 'padme1234','2020-04-13 7:20:45','2020-04-14 7:20:45');

INSERT INTO poddler_db.Collections (collectionTitle, createdAt, updatedAt, UserID) VALUES ('Apprentices', '2020-04-13 7:20:45','2020-04-14 7:20:45', 1);
INSERT INTO poddler_db.Collections (collectionTitle, createdAt, updatedAt, UserID) VALUES ('Relationships', '2020-04-13 7:20:45','2020-04-14 7:20:45', 2);
INSERT INTO poddler_db.Collections (collectionTitle, createdAt, updatedAt, UserID) VALUES ('Fatherhood', '2020-04-13 7:20:45','2020-04-14 7:20:45', 3);

INSERT INTO poddler_db.Podcasts (podcastTitle, review, rating, createdAt, updatedAt, CollectionID) VALUES ('The Yoda Podcast', 'Boring, this podcast is', 1,'2020-04-13 7:20:45', '2020-04-14 7:20:45', 1);
INSERT INTO poddler_db.Podcasts (podcastTitle, review, rating, createdAt, updatedAt, CollectionID) VALUES ('The Padawan', 'I found this podcast helpful... you will become a Jedi', 4, '2020-04-13 7:20:45', '2020-04-14 7:20:45', 1);
INSERT INTO poddler_db.Podcasts (podcastTitle, review, rating, createdAt, updatedAt, CollectionID) VALUES ('Masters', "This teaches you many stuff from the masters", 3, '2020-04-13 7:20:45', '2020-04-14 7:20:45', 1);

INSERT INTO poddler_db.Podcasts (podcastTitle, review, rating, createdAt, updatedAt, CollectionID) VALUES ('Yoda is Building Relationships', 'Love, this podcast is', 1,'2020-04-13 7:20:45', '2020-04-14 7:20:45', 2);
INSERT INTO poddler_db.Podcasts (podcastTitle, review, rating, createdAt, updatedAt, CollectionID) VALUES ('Love is in the air', 'I found this podcast helpful...maybe it will help my love life', 4, '2020-04-13 7:20:45', '2020-04-14 7:20:45', 2);

INSERT INTO poddler_db.Podcasts (podcastTitle, review, rating, createdAt, updatedAt, CollectionID) VALUES ('Anakin Loves His Children', 'Boring, this podcast is', 1,'2020-04-13 7:20:45', '2020-04-14 7:20:45', 3);

 