import prisma from "../prisma";

export const addSubjects = async (req: any, res: any) => {
  try {
    const { name, description = null } = req.body;
    await prisma.subjects.create({
      data: {
        name: name,
        description: description,
      },
    });
    res.status(200).send("created");
  } catch (error: any) {
    console.log("error", error);
    res.status(error.status).send(error.message);
  }
};

export const getSubjects = async (req: any, res: any) => {
  try {
    const subjects = await prisma.subjects.findMany();
    res.status(200).json(subjects);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
