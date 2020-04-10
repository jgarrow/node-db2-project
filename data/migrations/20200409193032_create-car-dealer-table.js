exports.up = function (knex, Promise) {
    return knex.schema.createTable("car-dealer", (tbl) => {
        // creates primary key called id
        tbl.increments();
        tbl.text("vin").unique().notNullable();
        tbl.text("make").notNullable();
        tbl.text("model").notNullable();
        tbl.int("mileage").notNullable();
        tbl.text("transimission_type");
        tbl.text("title_status");
    });
};

exports.down = function (knex, Promise) {
    // drops entire table called 'car-dealer'
    return knex.dropTableIfExists("car-dealer");
};
