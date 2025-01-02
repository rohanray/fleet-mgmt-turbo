CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    fname text not null,
    lname text not null,
    email text not null,
    password text not null,
    enabled boolean not null default false,
    created_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    updated_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);

CREATE TABLE drivers(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    fname text not null,
    lname text not null,
    mobile text not null,
    status text not null,
    license text not null,
    license_expiry text not null,
    mileage integer not null,
    created_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    updated_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
CREATE UNIQUE INDEX `drivers_license_unique` ON `drivers` (`license`);
CREATE UNIQUE INDEX `drivers_mobile_unique` ON `drivers` (`mobile`);

CREATE TABLE trucks(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    plate text not null,
    operational_from text not null,
    starting_mileage integer not null,
    total_mileage integer not null,
    created_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    updated_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    capacity integer not null,
    status text not null
);
CREATE UNIQUE INDEX `trucks_plate_unique` ON `trucks` (`plate`);

CREATE TABLE trips(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    driver_id integer not null,
    truck_id integer not null,
    start_date text not null,
    end_date text not null,
    start_location TEXT NOT NULL,
    end_location TEXT,
    distance integer not null,
    status text not null,
    start_mileage integer not null,
    end_mileage integer not null,
    created_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    updated_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    FOREIGN KEY(driver_id) REFERENCES drivers(id),
    FOREIGN KEY(truck_id) REFERENCES trucks(id)
);
CREATE INDEX trips_driver_id_idx ON trips(driver_id);
CREATE INDEX trips_truck_id_idx ON trips(truck_id);
CREATE INDEX trips_status_idx ON trips(status);
CREATE INDEX trips_start_date_idx ON trips(start_date);

CREATE TABLE maintenance(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    truck_id integer not null,
    date text not null,
    type text not null, -- service, repair, planned, breakdown
    checkin_mileage integer not null,
    cost real not null,
    part text not null,
    description text not null,
    created_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    updated_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    FOREIGN KEY(truck_id) REFERENCES trucks(id)
);
CREATE INDEX maintenance_truck_id_idx ON maintenance(truck_id);

CREATE TABLE fuel(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    truck_id integer not null,
    date text not null,
    quantity integer not null,
    mileage integer not null,
    rate real not null, -- rate per litre
    location text not null,
    created_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    updated_at text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    FOREIGN KEY(truck_id) REFERENCES trucks(id)
);
CREATE INDEX fuel_truck_id_idx ON fuel(truck_id);
CREATE INDEX fuel_date_idx ON fuel(date);

-- down
-- DROP TABLE IF EXISTS users;
-- DROP TABLE IF EXISTS drivers;
-- DROP TABLE IF EXISTS trucks;
-- DROP TABLE IF EXISTS trips;
-- DROP TABLE IF EXISTS maintenance;
-- DROP TABLE IF EXISTS fuel;