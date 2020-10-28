exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("packages")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("packages").insert([
        {
          carrier: "UPS",
          origin_zip: "80219",
          origin_address: "123 Fake St",
          destination_zip: "94702",
          destination_address: "456 Very Nice Blvd",
          weight_g: 80.2,
        },
        {
          carrier: "FedEx",
          origin_zip: "59801",
          origin_address: "666 Devil Way",
          destination_zip: "99901",
          destination_address: "1111 Angel Pl",
          weight_g: 400.8,
        },
        {
          carrier: "USPS",
          origin_zip: "12345",
          origin_address: "99 Problems Ave",
          destination_zip: "54321",
          destination_address: "1 More Blvd",
          weight_g: 1500.5,
        },
      ]);
    });
};
