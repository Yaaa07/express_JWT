import { Sequelize } from "sequelize";

const db = new Sequelize('tugas_db', 'root', '' , {
    host: 'localhost',
    dialect: 'mysql'
});

    export default db;