/*
  Warnings:

  - Added the required column `userId` to the `publications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "publications" ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "published" SET DEFAULT false;

-- CreateTable
CREATE TABLE "_PublicationToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PublicationToUser_AB_unique" ON "_PublicationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PublicationToUser_B_index" ON "_PublicationToUser"("B");

-- AddForeignKey
ALTER TABLE "_PublicationToUser" ADD CONSTRAINT "_PublicationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "publications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PublicationToUser" ADD CONSTRAINT "_PublicationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
