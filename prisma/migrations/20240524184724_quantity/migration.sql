-- AlterTable
ALTER TABLE "Cart" ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "quantity" INTEGER DEFAULT 0;
