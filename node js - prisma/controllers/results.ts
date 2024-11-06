import prisma from "../prisma";

export const createResults = async (req: any, res: any) => {
  try {
    await prisma.results.create({
      data: {
        classId: req.body.classId,
        studentId: req.body.studentId,
        subjectId: req.body.subjectId,
        grade: req.body.grade,
      },
    });

    res.status(200);
  } catch (error: any) {
    console.log("error", error);
    res.status(500).send(error.message);
  }
};
export const getResults = async (req: any, res: any) => {
  try {
    const results = await prisma.results.findMany();
    res.status(200).json(results);
  } catch (error: any) {
    console.log("error", error);
    res.status(500).send(error.message);
  }
};

export const addResults = async (results: any) => {
  try {
    console.log("results", results);
    await prisma.results.create({
      data: {
        classId: results.classId,
        studentId: results.studentId,
        subjectId: results.subjectId,
        grade: results.grade,
      },
    });
    return "created succesfully";
  } catch (error: any) {
    console.log("errorr", error);
    return error.message;
  }
};
