/*
  Warnings:

  - Added the required column `uni_med_id` to the `productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `permiso_id` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `productos` ADD COLUMN `uni_med_id` INTEGER NOT NULL,
    MODIFY `imagen` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `permiso_id` INTEGER NOT NULL,
    ADD COLUMN `usuario` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `permisos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `accion` ENUM('CREATE', 'READ', 'UPDATE', 'DELETE') NOT NULL,
    `tabla` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `permisos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unid_medidas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,
    `desc_abreviada` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `unid_medidas_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ruc` VARCHAR(191) NOT NULL,
    `razonsocial` VARCHAR(191) NOT NULL,
    `direccionfiscal` VARCHAR(191) NOT NULL,
    `afectacion_id` INTEGER NOT NULL,

    UNIQUE INDEX `clientes_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `afectaciontributos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `afectacion` ENUM('SINAFECTACION', 'DETRACCION', 'PERCEPCION', 'RETENCION') NOT NULL,

    UNIQUE INDEX `afectaciontributos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente_id` INTEGER NOT NULL,
    `total` DOUBLE NOT NULL,
    `moneda` ENUM('SOLES', 'DOLARES') NOT NULL,
    `direccion_recojo` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,
    `estado` ENUM('PENDIENTE', 'FACTURADO', 'RECHAZADO', 'ANULADO') NOT NULL,
    `usuario_id` INTEGER NOT NULL,

    UNIQUE INDEX `pedidos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos_detalle` (
    `id` INTEGER NOT NULL,
    `cant` DOUBLE NOT NULL,
    `precio` DOUBLE NOT NULL,
    `subtotal` DOUBLE NOT NULL,
    `pedido_id` INTEGER NOT NULL,
    `unimed_id` INTEGER NOT NULL,
    `producto_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ventas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedidoid` INTEGER NOT NULL,
    `fecdoc` DATETIME(3) NOT NULL,
    `serie` VARCHAR(191) NOT NULL,
    `nrodoc` INTEGER NOT NULL,
    `importe` DOUBLE NOT NULL,
    `formapago` ENUM('CONTADO', 'CREDITO') NOT NULL,
    `moneda` ENUM('SOLES', 'DOLARES') NOT NULL,
    `tc` DOUBLE NOT NULL,

    UNIQUE INDEX `Ventas_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `productos` ADD CONSTRAINT `productos_uni_med_id_fkey` FOREIGN KEY (`uni_med_id`) REFERENCES `unid_medidas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_permiso_id_fkey` FOREIGN KEY (`permiso_id`) REFERENCES `permisos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clientes` ADD CONSTRAINT `clientes_afectacion_id_fkey` FOREIGN KEY (`afectacion_id`) REFERENCES `afectaciontributos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidos` ADD CONSTRAINT `pedidos_usuario_id_fkey` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidos` ADD CONSTRAINT `pedidos_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidos_detalle` ADD CONSTRAINT `pedidos_detalle_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidos_detalle` ADD CONSTRAINT `pedidos_detalle_unimed_id_fkey` FOREIGN KEY (`unimed_id`) REFERENCES `unid_medidas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pedidos_detalle` ADD CONSTRAINT `pedidos_detalle_producto_id_fkey` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ventas` ADD CONSTRAINT `Ventas_pedidoid_fkey` FOREIGN KEY (`pedidoid`) REFERENCES `pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
