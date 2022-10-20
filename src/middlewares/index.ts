import { validarcampos } from "./validar-campos";
import { validarjwt } from "./validar-jwt";
import validarRoles from "./validar-roles"

module.exports = {
    ...validarcampos,
    ...validarjwt,
    ...validarRoles,
}