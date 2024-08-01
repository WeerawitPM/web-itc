-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Website" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "tutorial" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    CONSTRAINT "Website_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Website_Detail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "websiteId" INTEGER NOT NULL,
    CONSTRAINT "Website_Detail_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
