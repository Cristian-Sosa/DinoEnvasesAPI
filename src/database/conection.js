import sql from "mssql";

const dbSettings = {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  server: process.env.DB_SERVER,
  options: {
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);

    console.log(
      `La conexión a ${process.env.DB_DATABASE} ha sido establecida correctamente en el servidor ${process.env.DB_SERVER}`
    );

    return pool;
  } catch (error) {
    console.log(
      `La conexión a ${process.env.DB_DATABASE} no se pudo establecer ${error}`
    );
  }
}
