select count("cities".*) as "totalCities",
      "countries"."name" as "countryName"
  from "countries"
  join "cities" using ("countryId")
 group by "countries"."countryId";
