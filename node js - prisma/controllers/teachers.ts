import { response } from "express";
import prisma from "../prisma";

const addTeachers = async (req: any, res: any) => {
  try {
    const { name, email, password, phoneNumber, subjectId } = req.body;
    const teachers = await prisma.teachers.create({
      data: {
        name: name,
        email: email,
        password: password,
        role: "teacher",
        phoneNumber: phoneNumber,
        subject: subjectId,
      },
    });
    console.log("teacher", teachers);
    res.send("teacher added sucessfully");
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const getTeacher = async (req: any) => {
  try {
    const teachers = await prisma.teachers.findMany();
    // res.status(200).json(teachers);
    return teachers
  } catch (error) {
    console.log("error", error);
    // return res.status(500);
    return "sravanthi"
  }
};

export { getTeacher, addTeachers };
