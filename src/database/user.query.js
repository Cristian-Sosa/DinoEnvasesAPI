export const userQuery = {
    getUserByUsernameAndPassword: `SELECT * FROM Usuario WHERE Usuario = @Usuario AND Password = @Password`,
    getAllUsers: `SELECT * FROM Usuario`,
    getUserById: `SELECT * FROM Usuario WHERE ID = @UsuarioId`,
    getAllActiveUsers: `SELECT * FROM Usuario WHERE Habilitado = 1`,
    createNewUser: `INSERT INTO Usuario (DNI, Nombre, Apellido, Usuario, password, Habilitado) VALUES (@DNI, @Nombre, @Apellido, @Usuario, @Password, 1)`
}