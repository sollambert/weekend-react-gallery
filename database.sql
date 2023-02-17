create table "images" (
    "id" SERIAL INT,
    "path" VARCHAR (80),
    "description" TEXT,
    "likes" INT default 0
);

INSERT INTO "images" ("path", "description")
VALUES('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
    ('images/club-penguin-breakdance.gif', 'The best god damn thing in the world.'),
    ('images/amethyst-cat.png', 'meow'),
    ('images/mazda-protege.jpeg', 'shit car'),
    ('images/Orc-5e.webp', 'big orc boy'),
    ('images/photo_of_me.jpg', 'it me');