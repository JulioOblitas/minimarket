/*
  Warnings:

  - You are about to alter the column `nombre` on the `tipo_productos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `tipo_productos` MODIFY `nombre` VARCHAR(50) NOT NULL;
