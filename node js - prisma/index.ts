// import { PrismaClient } from "@prisma/client";
import express from "express";
import { route } from "./routes";
import http from "http";

import {  createSocketConnection } from "./websocket";
var cors = require("cors");

// const prisma = new PrismaClient();

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use("/", route);
app.use(cors({ origin: true }));
createSocketConnection();




// const server = http.createServer(app);

// async function main() {
//   await prisma.students.create({
//     data: {
//       name: "sravnthi",
//       email: "sravanthi@gmail.com",
//       phoneNumber: "9705925616",
//       password: "123456789 ",
//       role: "test",
//     },
//   });
//   const students = await prisma.students.findMany();
//   console.log("students", students);
// }

// app.get("/", async (req, res) => {
//   const students = await prisma.students.findMany();
//   console.log("studentss",)
//   return res.status(200).json(students)
//   // res.send("Hello World!" + students);
// });

// app.post("/create", (req, res) => {
//   const { name, email, phoneNumber, password, role } = req.body;
//   const students = prisma.students.create({
//     data: {
//       name: name,
//       email: email,
//       phoneNumber: phoneNumber,
//       password: password,
//       role: role,
//     },
//   });
//   return res.send("student created succusfully" + students);
// });

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.log("error", e);
//     await prisma.$disconnect();
//   });

server.listen(3000, () => {
  console.log("server started on port 3000");
});
