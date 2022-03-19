/*
  Warnings:

  - Added the required column `codsunat` to the `numerador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `numerador` ADD COLUMN `codsunat` INTEGER NOT NULL;
