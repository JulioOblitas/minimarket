-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `correo` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `tipo_usuario` ENUM('ADMIN', 'CLIENTE', 'SUPERADMIN') NOT NULL,

    UNIQUE INDEX `usuarios_id_key`(`id`),
    UNIQUE INDEX `usuarios_correo_key`(`correo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
