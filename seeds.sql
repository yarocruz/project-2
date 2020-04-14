USE poddler_db;

INSERT INTO poddler_db.Users (email, password, createdAt, updatedAt) VALUES ('yoda@jedi.com', 'yoda1234', '2020-04-13 7:20:45', '2020-04-14 7:20:45');
INSERT INTO poddler_db.Users (email, password, createdAt, updatedAt) VALUES ('luke.skywalker@jedi.com', 'luke1234','2020-04-13 7:20:45','2020-04-14 7:20:45');
INSERT INTO poddler_db.Users (email, password, createdAt, updatedAt) VALUES ('darth.varder@sith.com', 'padme1234','2020-04-13 7:20:45','2020-04-14 7:20:45');

INSERT INTO poddler_db.Collections (collectionTitle, podcastTitle, createdAt, updatedAt, UserID) VALUES ('Apprentices', 'Coffee with Kenobi', '2020-04-13 7:20:45','2020-04-14 7:20:45', 1);
INSERT INTO poddler_db.Collections (collectionTitle, podcastTitle, createdAt, updatedAt, UserID) VALUES ('Relationships', 'Modern Love', '2020-04-13 7:20:45','2020-04-14 7:20:45', 2);
INSERT INTO poddler_db.Collections (collectionTitle, podcastTitle, createdAt, updatedAt, UserID) VALUES ('Fatherhood', 'Five Minute Fatherhood Podcast', '2020-04-13 7:20:45','2020-04-14 7:20:45', 3);

INSERT INTO poddler_db.Reviews (collectionName, review, rating, createdAt, updatedAt, CollectionID, UserID) VALUES ('Apprentices', 'Boring, this podcast is', 1,'2020-04-13 7:20:45', '2020-04-14 7:20:45', 1, 1);
INSERT INTO poddler_db.Reviews (collectionName, review, rating, createdAt, updatedAt, CollectionID, UserID) VALUES ('Relationships', 'I found this podcast helpful...maybe it will help my love life', 4, '2020-04-13 7:20:45', '2020-04-14 7:20:45', 1, 2);
INSERT INTO poddler_db.Reviews (collectionName, review, rating, createdAt, updatedAt, CollectionID, UserID) VALUES ('Fatherhood', "After cutting off my son's hand, I think this might help fix my relationship with him", 3, '2020-04-13 7:20:45', '2020-04-14 7:20:45', 1, 3);

 