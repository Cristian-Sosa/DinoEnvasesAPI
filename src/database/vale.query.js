export const valeQuery = {
    getLastId: `SELECT 1`,
    getSucursalTipreID: `SELECT * FROM Sucursal WHERE DescripcionCorta = @sucursal`,
    getLastValeID: `SELECT TOP 1 * FROM Vale ORDER BY Id DESC`
}