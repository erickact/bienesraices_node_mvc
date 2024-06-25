import bcrypt from "bcrypt";

const usuarios = [
  {
    nombre: "Ericka",
    email: "ericka@ericka.com",
    confirmado: 1,
    password: bcrypt.hashSync("password", 10),
  },
];

export default usuarios;
