import { getConnection } from "../../database/conection.js";
import { valeQuery } from "../../database/vale.query.js";
import { getUserById } from "./user.controller.js";

import sql from "mssql";

export const addNewVale = async (req, res) => {
  const { carga } = req.body;

  if (!carga) return res.end();

  try {
    const sucursalTipre = await getSucursalID(carga.NombreSucursal);
    const lastValeID = await getLastValeID();

    const barcode = generateEAN(sucursalTipre.SucTipre, lastValeID);

    const usuario = await getUserById(carga.IdUsuario);

    res.status(200).json({barcode: barcode, usuario, usuario});
  } catch (error) {
    res.status(400).json(carga);
  }
};

// * Ejemplo de vale
// * { NroSucursal: 111, id: 222 }
const generateEAN = (nroSucursal, id) => {
  const CodBarra1 =
    "9" +
    ("000" + nroSucursal.toString()).slice(-3) +
    ("00000000" + id.toString()).slice(-8);

  const CodBarra2 = "9" + ("00000000000" + id.toString()).slice(-11);

  return { CodBarra1, CodBarra2 };
};

const getSucursalID = async (sucursal) => {
  const pool = await getConnection();

  let query = await pool
    .request()
    .input("sucursal", sql.NVarChar, sucursal)
    .query(valeQuery.getSucursalTipreID);

  return query.recordset[0];
};

const getLastValeID = async () => {
  const pool = await getConnection();

  let query = await pool.request().query(valeQuery.getLastValeID);

  return query.recordset[0].Id + 1;
};
