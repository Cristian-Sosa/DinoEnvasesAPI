import { getConnection } from "../database/conection.js";

export const getAllUsuarios = async (req, res) => {
  const pool = await getConnection();

  let usuariosQuery = await pool.request().query(`SELECT * FROM Usuarios`);

  res.send(usuariosQuery.recordset);
};

export const getAllUsuariosHabilitados = async (req, res) => {
  try {
    const pool = await getConnection();

    let usuariosQuery = await pool
      .request()
      .query(`SELECT * FROM Usuarios WHERE EstadoID = 5`);

    res.status(200).json(usuariosQuery.recordset);
  } catch (error) {
    res.status(500);
  }
};

export const createNewUser = async (req, res) => {
  try {
    const pool = await getConnection();

    const { user, pass } = req.body;

    console.log('controller')
    res.json({user: user, pass: pass})


    // let queryResult = pool
    //   .request()
    //   .query(
    //     `select * from Usuario WHERE Usuarios = ${user} AND Password = ${pass}`
    //   );

    // if (usuario) {
    //   res.json(queryResult.recordset);
    // } else {
    //   res.send();
    // }
  } catch (error) {
    res.status(500);
  }
};
