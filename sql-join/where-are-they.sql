select "a"."line1" as "line1",
        "a"."district" as "district",
        "c"."name" as "name"
    from "addresses" as "a"
    join "cities" as "c" using ("cityId");
