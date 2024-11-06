import { Router } from "express";
import { createStudent, getStudentData } from "../controllers/students";
import { addSubjects, getSubjects } from "../controllers/subjects";
import { addTeachers, getTeacher } from "../controllers/teachers";
import { addClasses, getClasses } from "../controllers/classes";
import { createResults, getResults } from "../controllers/results";

const route = Router();

var cors = require("cors");

route.use(cors({ origin: true }));

route.post("/students/add", createStudent);
route.get("/students/get", getStudentData);
route.post("/teacher/add", addTeachers);
route.get("/teacher/get", getTeacher);
route.get("/classes/get", getClasses);
route.post("/classes/add", addClasses);
route.get("/subject/add", addSubjects);
route.post("/subjects/get", getSubjects);
route.post("/results/add", createResults);
route.get("/results/get", getResults);

export { route };
