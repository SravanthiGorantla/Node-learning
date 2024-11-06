const database = require("..");

const createUserTable = async () => {
    try {
      const client = await database.connect();

    await client.query(`CREATE TABLE users(    id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL )`);

    console.log("table created succesfully");
  } catch (error) {
    console.log(error);
  }
};

createUserTable();

// const alterusertable = async () => {
//     client.query(` alter table users add cloumn `)
// };

// const

const createOrganizationTable = async () => {
    try {
        const client = await database.connect();

        await client.query(
            `create table organizations ( id SERIAL primary key, company VARCHAR(100) NOT NULL , owner_id varchar(20))`
        );
    }
    catch (error) {
        console.log("error",error)
    }
}
createOrganizationTable()