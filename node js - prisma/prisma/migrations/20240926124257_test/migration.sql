/*
  Warnings:

  - You are about to drop the `TeacherSubjects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TeacherSubjects" DROP CONSTRAINT "TeacherSubjects_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "TeacherSubjects" DROP CONSTRAINT "TeacherSubjects_teacherId_fkey";

-- AlterTable
ALTER TABLE "Subjects" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Teachers" ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- DropTable
DROP TABLE "TeacherSubjects";

-- CreateTable
CREATE TABLE "_SubjectsToTeachers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SubjectsToTeachers_AB_unique" ON "_SubjectsToTeachers"("A", "B");

-- CreateIndex
CREATE INDEX "_SubjectsToTeachers_B_index" ON "_SubjectsToTeachers"("B");

-- AddForeignKey
ALTER TABLE "_SubjectsToTeachers" ADD CONSTRAINT "_SubjectsToTeachers_A_fkey" FOREIGN KEY ("A") REFERENCES "Subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubjectsToTeachers" ADD CONSTRAINT "_SubjectsToTeachers_B_fkey" FOREIGN KEY ("B") REFERENCES "Teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
