const database = require("..");

const insertUser = async (data) => {
  const client = await database.connect();

  try {
    const { fname, lname } = data;

    await client.query(
      "Insert into users (first_name, last_name) values ($1,$2) ",
      [fname, lname]
    );
  } catch (error) {
    console.log("error", error);
  } finally {
    client.release();
  }
};

const UpdateUser = async (data) => {
  console.log("data", data);
  const client = await database.connect();
  try {
    const { fname, lname, id } = data;

    client.query("update users set first_name= $1, last_name= $2 where id=$3", [
      fname,
      lname,
      id,
    ]);
  } catch (error) {
    console.log("error", error);
  } finally {
    console.log("finallu");
    client.release();
  }
};

const deleteUser = async (data) => {
  const { id } = data;
  console.log("delete id", id);
  const client = await database.connect();

  try {
    client.query("delete from users where id= $1", [id]);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { insertUser, UpdateUser, deleteUser };
