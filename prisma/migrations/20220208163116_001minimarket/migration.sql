/*
  Warnings:

  - You are about to drop the column `ruc` on the `clientes` table. All the data in the column will be lost.
  - You are about to alter the column `razonsocial` on the `clientes` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `direccionfiscal` on the `clientes` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `direccion_recojo` on the `pedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `telefono` on the `pedidos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(9)`.
  - You are about to alter the column `tabla` on the `permisos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `descripcion` on the `unid_medidas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `desc_abreviada` on the `unid_medidas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `correo` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `usuario` on the `usuarios` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `serie` on the `ventas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(4)`.
  - Added the required column `doi` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipodoc` to the `clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `clientes` DROP COLUMN `ruc`,
    ADD COLUMN `doi` VARCHAR(15) NOT NULL,
    ADD COLUMN `tipodoc` ENUM('DNI', 'RUC', 'PASAPORTE', 'CARNET_EXTRANJERIA', 'OTROS_DOCUMENTOS') NOT NULL,
    MODIFY `razonsocial` VARCHAR(100) NOT NULL,
    MODIFY `direccionfiscal` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `pedidos` ADD COLUMN `fecha` DATE NOT NULL,
    MODIFY `direccion_recojo` VARCHAR(100) NOT NULL,
    MODIFY `telefono` VARCHAR(9) NOT NULL;

-- AlterTable
ALTER TABLE `permisos` MODIFY `tabla` VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `unid_medidas` MODIFY `descripcion` VARCHAR(100) NOT NULL,
    MODIFY `desc_abreviada` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `usuarios` MODIFY `correo` VARCHAR(50) NOT NULL,
    MODIFY `usuario` VARCHAR(50) NULL;

-- AlterTable
ALTER TABLE `ventas` MODIFY `fecdoc` DATE NOT NULL,
    MODIFY `serie` VARCHAR(4) NOT NULL;
