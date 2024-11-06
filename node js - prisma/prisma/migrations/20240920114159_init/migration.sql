/*
  Warnings:

  - You are about to drop the `Messages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organizations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Messages" DROP CONSTRAINT "Messages_senderId_fkey";

-- DropTable
DROP TABLE "Messages";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "organizations";
