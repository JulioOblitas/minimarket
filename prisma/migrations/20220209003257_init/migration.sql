-- AlterTable
ALTER TABLE `permisos` MODIFY `accion` ENUM('CREATE', 'READ', 'UPDATE', 'DELETE', 'ALL') NOT NULL,
    MODIFY `tabla` VARCHAR(20) NULL;

-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `hashgen` VARCHAR(200) NULL;
