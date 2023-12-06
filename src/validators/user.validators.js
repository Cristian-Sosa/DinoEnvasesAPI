import { check } from "express-validator";
import { singleUserHelper } from "../helpers/user.helper.js";

export const SingleUserValidator = [
  check("user").exists().isString().not().isEmpty,
  check("pass").exists().isString().not().isEmpty(),
  (req, res, next) => {
    singleUserHelper(req, res, next);
  },
];
