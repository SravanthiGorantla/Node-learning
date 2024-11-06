import prisma from "../prisma";

export const addClasses = async (req: any, res: any) => {
  try {
    const { name, description, classTeacherId } = req.body;
    let payload: any = {};
    payload.name = name;
    if (description) {
      payload.description = description;
    }
    if (classTeacherId) {
      payload.classTeacherId = classTeacherId;
    }
    console.log("name", payload);
    const test = await prisma.class.create({
      data: payload,
    });
    console.log("test", test);
    res.status(200).send("class added succesfully");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const getClasses = async (req: any, res: any) => {
  try {
    const classes = await prisma.class.findMany();
    res.status(200).json(classes);
  } catch (error: any) {
    console.log("error", error);
    res.status(500).send(error.message);
  }
};
