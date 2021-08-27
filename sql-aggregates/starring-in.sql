select count("films".*) as "totalMovies",
        "categories"."name" as "genreCategory"
        from "castMembers"
        join "actors" using ("actorId")
        join "films" using ("filmId")
        join "filmCategory" using ("filmId")
        join "categories" using ("categoryId")
        where "actors"."firstName" = 'Lisa'
        and "actors"."lastName" = 'Monroe'
        group by "categories"."categoryId";
