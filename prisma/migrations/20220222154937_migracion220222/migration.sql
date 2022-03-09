/*
  Warnings:

  - You are about to drop the column `pedido_id` on the `pedidos_detalle` table. All the data in the column will be lost.
  - Added the required column `pedidoId` to the `pedidos_detalle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `pedidos_detalle` DROP FOREIGN KEY `pedidos_detalle_pedido_id_fkey`;

-- AlterTable
ALTER TABLE `pedidos_detalle` DROP COLUMN `pedido_id`,
    ADD COLUMN `pedidoId` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AddForeignKey
ALTER TABLE `pedidos_detalle` ADD CONSTRAINT `pedidos_detalle_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
