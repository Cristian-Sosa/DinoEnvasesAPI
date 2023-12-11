export const userQuery = {
    getUserByUsernameAndPassword: `SELECT * FROM Usuario WHERE Usuario = @user AND Password = @password`,
    getAllUsers: `SELECT * FROM Usuario`,
    getAllActiveUsers: `SELECT * FROM Usuario WHERE Habilitado = 1`,
    createNewUser: `INSERT INTO Usuario (DNI, Nombre, Apellido, Usuario, password, Habilitado) VALUES (@dni, @name, @lastname, @user, @password, 1)`
}