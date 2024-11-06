/*
  Warnings:

  - A unique constraint covering the columns `[classTeacherId]` on the table `Class` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Teachers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Teachers" ADD COLUMN     "classId" TEXT;

-- CreateTable
CREATE TABLE "testTable" (
    "firstName" TEXT NOT NULL,
    "secondName" TEXT NOT NULL,

    CONSTRAINT "testTable_pkey" PRIMARY KEY ("firstName","secondName")
);

-- CreateTable
CREATE TABLE "_ClassToTeachers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToTeachers_AB_unique" ON "_ClassToTeachers"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToTeachers_B_index" ON "_ClassToTeachers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Class_classTeacherId_key" ON "Class"("classTeacherId");

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_email_key" ON "Teachers"("email");

-- AddForeignKey
ALTER TABLE "_ClassToTeachers" ADD CONSTRAINT "_ClassToTeachers_A_fkey" FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToTeachers" ADD CONSTRAINT "_ClassToTeachers_B_fkey" FOREIGN KEY ("B") REFERENCES "Teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
