select "customers"."firstName" as "firstName",
        "customers"."lastName" as "lastName"
    from "inventory"
    join "rentals" using ("inventoryId")
    join "customers" using ("storeId")
    join "films" using ("filmId")
  where "films"."title" = 'Magic Mallrats';
