-- CreateTable
CREATE TABLE `numerador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` ENUM('FACTURA', 'BOLETA_DE_VENTA', 'NOTA_DE_CREDITO', 'NOTA_DE_DEBITO') NOT NULL,
    `serie` VARCHAR(5) NOT NULL,
    `numero` INTEGER NOT NULL,

    UNIQUE INDEX `numerador_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
