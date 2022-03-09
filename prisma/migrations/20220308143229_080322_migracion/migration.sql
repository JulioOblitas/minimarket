/*
  Warnings:

  - Added the required column `telefono` to the `clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clientes` ADD COLUMN `telefono` VARCHAR(9) NOT NULL;
