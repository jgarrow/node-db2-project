exports.seed = function (knex, Promise) {
    // Reset ALL existing entries
    return knex("cars")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("cars").insert([
                {
                    vin: "1234",
                    make: "Honda",
                    model: "Civic",
                    mileage: 50000,
                    transmission_type: `manual`,
                },
                {
                    vin: "1835",
                    make: "Subaru",
                    model: "Forester",
                    mileage: 150320,
                    transmission_type: `automatic`,
                    title_status: `clean`,
                },
                {
                    vin: "59323",
                    make: "Toyota",
                    model: "Corolla",
                    mileage: 75802,
                    transmission_type: `automatic`,
                },
                {
                    vin: "95308",
                    make: "FIAT",
                    model: "500",
                    mileage: 65000,
                    title_status: "clean",
                },
                { vin: "24960", make: "Honda", model: "CR-V", mileage: 132000 },
                {
                    vin: "12934",
                    make: "Hyundai",
                    model: "Santa Fe",
                    mileage: 120000,
                    transmission_type: `automatic`,
                    title_status: "salvage",
                },
                {
                    vin: "17854",
                    make: "Mazda",
                    model: "MX 5",
                    mileage: 53021,
                    transmission_type: `manual`,
                },
                {
                    vin: "7536",
                    make: "Dodge",
                    model: "Caravan",
                    mileage: 185000,
                    title_status: "clean",
                },
                {
                    vin: "12573",
                    make: "Subaru",
                    model: "Outback",
                    mileage: 215000,
                },
                {
                    vin: "5089",
                    make: "Ford",
                    model: "F-150",
                    mileage: 250000,
                    transmission_type: `automatic`,
                },
                {
                    vin: "3613",
                    make: "Honda",
                    model: "Accord",
                    mileage: 25000,
                    title_status: "salvage",
                },
            ]);
        });
};
