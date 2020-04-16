exports.up = function (knex, Promise) {
    return knex.schema.createTable("cars", (tbl) => {
        // creates primary key called id
        tbl.increments();
        tbl.text("vin").unique().notNullable();
        tbl.text("make").notNullable();
        tbl.text("model").notNullable();
        tbl.integer("mileage").notNullable();
        tbl.text("transmission_type");
        tbl.text("title_status");
    });
};

exports.down = function (knex, Promise) {
    // drops entire table called 'car-dealer'
    return knex.schema.dropTableIfExists("cars");
};
