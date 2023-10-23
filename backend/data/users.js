import bcrypt from "bcryptjs";

const Users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Himanshu Mishra",
    email: "mishra@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "ronak goel",
    email: "goel@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default Users;
