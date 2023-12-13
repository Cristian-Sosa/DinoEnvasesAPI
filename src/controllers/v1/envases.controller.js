import { getConnection } from "../../database/conection.js";
import { envasesQuery } from "../../database/envases.query.js";

export const getAllEnvases = async (req, res) => {
  try {
    const pool = await getConnection();

    let query = await pool
      .request()
      .query(envasesQuery.getAllEnvasesHabilitados);

    res.status(200).json({
      status: 200,
      message: "Envases obtenidos correctamente",
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

export const getAllTipoEnvases = async (req, res) => {
  try {
    const pool = await getConnection();

    let query = await pool.request().query(envasesQuery.getAllTipoEnvases);

    res.status(200).json({
      status: 200,
      message: "Tipo de Envases obtenidos correctamente",
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
