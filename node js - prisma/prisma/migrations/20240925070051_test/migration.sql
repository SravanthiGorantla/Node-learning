/*
  Warnings:

  - You are about to drop the column `subjectid` on the `Results` table. All the data in the column will be lost.
  - Added the required column `subjectId` to the `Results` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_classTeacherId_fkey";

-- DropForeignKey
ALTER TABLE "Results" DROP CONSTRAINT "Results_subjectid_fkey";

-- AlterTable
ALTER TABLE "Class" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "classTeacherId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Results" DROP COLUMN "subjectid",
ADD COLUMN     "subjectId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_classTeacherId_fkey" FOREIGN KEY ("classTeacherId") REFERENCES "Teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Results" ADD CONSTRAINT "Results_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
