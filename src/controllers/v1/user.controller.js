import { getConnection } from "../../database/conection.js";
import { userQuery } from "../../database/user.query.js";

import sql from "mssql";


export const getAllUsers = async (req, res) => {
  try {
    const pool = await getConnection();

    // Test DB at work
    let query = await pool.request().query(userQuery.getAllUsers);

    res.status(200).json({
      status: 200,
      message: "Usuarios obtenidos correctamente",
      data: query.recordset,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

export const getAllActiveUsers = async (req, res) => {
  try {
    const pool = await getConnection();

    // Test DB at work
    let query = await pool.request().query(userQuery.getAllActiveUsers);

    res.status(200).json({
      status: 200,
      message: "Usuarios obtenidos correctamente",
      data: query.recordset,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};

export const validateUser = async (req, res) => {
  try {
    const pool = await getConnection();

    const { Usuario, Password } = req.body;

    if (!Usuario || !Password) {
      return res.status(400).json({
        status: 400,
        mensaje: "Los campos 'user' y 'password' son obligatorios",
        data: null,
      });
    }

    // * Revisar nombres de la tabla original en caso de error
    let query = await pool
      .request()
      .input("Usuario", sql.NVarChar, Usuario)
      .input("Password", sql.NVarChar, Password)
      .query(userQuery.getUserByUsernameAndPassword);

      const usuario = query.recordset[0];

    if (!usuario) {
      return res
        .status(400)
        .json({ status: 400, mensaje: "Usuario no encontrado", data: null });
    } 

    let usuarioDTO = {
      id: usuario.Id,
      nombre: usuario.Nombre,
      apellido: usuario.Apellido,
      usuario: usuario.Usuario,
      habilitado: usuario.Habilitado,
    };

    return res.status(200).json({
      status: 200,
      message: "Usuario obtenido correctamente",
      data: usuarioDTO,
    });
  } catch (error) {
    res.json({
      status: 500,
      mensaje: error.message,
      data: null,
    });
  }
};

export const createNewUser = async (req, res) => {
  try {
    const pool = await getConnection();

    const { DNI, Nombre, Apellido, Usuario, Password } = req.body;

    if (!DNI || !Nombre || !Apellido || !Usuario || !Password) {
      res.status(400).json({
        status: 400,
        message:
          "Los campos 'DNI', 'Nombre', 'Apellido', 'Usuario' y 'Password' son obligatorios",
        data: null,
      });
    } else {
      const allUsersQuery = await pool.request().query(userQuery.getAllUsers);

      let userFilter = await allUsersQuery.recordset.filter(
        (activeUser) => activeUser.DNI == DNI.toString() || activeUser.Usuario == Usuario.toString()
      );

      if (userFilter.length !== 0) {
        res.status(400).json({
          status: 400,
          message: "Ya hay un usuario cargado con ese DNI o nombre de usuario",
          data: null,
        });
      } else {
        let query = await pool
          .request()
          .input("DNI", sql.NVarChar, DNI)
          .input("Nombre", sql.NVarChar, Nombre)
          .input("Apellido", sql.NVarChar, Apellido)
          .input("Usuario", sql.NVarChar, Usuario)
          .input("Password", sql.NVarChar, Password)
          .query(userQuery.createNewUser);

        res.status(200).json({
          status: 200,
          message: "Usuario creado correctamente",
          data: null,
        });
      }

      res.end();
    }
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
      data: null,
    });
  }
};
