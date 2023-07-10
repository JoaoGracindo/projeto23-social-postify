/*
  Warnings:

  - You are about to drop the `Publication` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Publication";

-- CreateTable
CREATE TABLE "publications" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "dateToPublish" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL,
    "socialMedia" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "publications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "publications_title_key" ON "publications"("title");
