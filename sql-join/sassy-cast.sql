select "actors"."firstName" as "firstName",
        "actors"."lastName" as "lastName"
    from "castMembers"
    join "actors" using ("actorId")
    join "films" using ("filmId")
  where "films"."title" = 'Jersey Sassy';
