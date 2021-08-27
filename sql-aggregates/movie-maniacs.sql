SELECT concat("c"."firstName", ' ', "c"."lastName") as "fullName",
      concat('$',sum("payments"."amount")) as "total"
      from "payments"
      join "customers" as "c" using ("customerId")
      group by "c"."customerId"
      order by sum("payments"."amount") desc;
