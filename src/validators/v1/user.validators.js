import { check, body } from "express-validator";
import { CreateNewUserHelper } from "../../helpers/v1/user.helper.js";

export const CreateNewUserValidator = [
  check("user", 'El email es incorrecto').exists().isString(),
  check("pass", 'La contraseña es requerida').exists().isString(),
  (req, res, next) => {
    CreateNewUserHelper(req, res, next);
  },
];
