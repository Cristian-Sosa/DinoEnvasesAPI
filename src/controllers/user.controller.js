import { getConnection } from "../database/conection.js";

export const getAllUsuarios = async (req, res) => {
  const pool = await getConnection();

  let usuariosQuery = await pool.request().query(`SELECT * FROM Usuario`);

  console.log(usuariosQuery);

  res.send(usuariosQuery.recordset);
};

export const getSingleUsuario = async (req, res) => {
  const pool = await getConnection();

  const { user, pass } = req.body;

  try {
    let queryResult = pool
      .request()
      .query(
        `select * from Usuario WHERE Usuario = ${user} AND Password = ${pass}`
      );

    if (usuario) {
      res.json(queryResult.recordset);
    } else {
      res.send();
    }
  } catch (error) {}
};
