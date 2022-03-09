-- CreateTable
CREATE TABLE `productos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `tipo_producto_id` INTEGER NOT NULL,

    UNIQUE INDEX `productos_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_productos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tipo_productos_id_key`(`id`),
    UNIQUE INDEX `tipo_productos_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `productos` ADD CONSTRAINT `productos_tipo_producto_id_fkey` FOREIGN KEY (`tipo_producto_id`) REFERENCES `tipo_productos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
