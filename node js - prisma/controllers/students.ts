import prisma from "../prisma";

export const createStudent = async (req: any, res: any) => {
  try {
    console.log("createstudent", req.body);
    const { name, email, password, phoneNumber, role } = req.body;

    await prisma.students.create({
      data: {
        name: name,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        role: role,
      },
    });
    return res.send("created succesfully");
  } catch (error: any) {
    console.log("error", error);
    res.status(500).send(error.message);
  }
};

export const getStudentData = async (req: any, res: any) => {
  try {
    const student = await prisma.students.findMany();
    res.status(200).json(student);
  } catch (error: any) {
    console.log("errror", error);
    res.status(500).send(error.message);
  }
};
