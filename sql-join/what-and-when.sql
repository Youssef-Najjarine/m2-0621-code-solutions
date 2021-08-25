select "films"."releaseYear" as "releaseYear",
        "categories"."name" as "categoryName"
    from "filmCategory"
    join "films" using ("filmId")
    join "categories" using ("categoryId")
  where "films"."title" = 'Boogie Amelie';
