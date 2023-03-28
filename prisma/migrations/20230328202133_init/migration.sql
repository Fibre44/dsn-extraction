-- CreateTable
CREATE TABLE "Extractions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "software" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sheets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "extractionId" TEXT,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    CONSTRAINT "Sheets_extractionId_fkey" FOREIGN KEY ("extractionId") REFERENCES "Extractions" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Columns" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bloc" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "header" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "sheetId" TEXT,
    CONSTRAINT "Columns_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "Sheets" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transcos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "columnsId" TEXT,
    "dsnValue" TEXT NOT NULL,
    "newValue" TEXT NOT NULL,
    CONSTRAINT "Transcos_columnsId_fkey" FOREIGN KEY ("columnsId") REFERENCES "Columns" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DsnBlocs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DsnFields" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "field" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "structure" TEXT NOT NULL,
    "dsnBlocId" TEXT,
    CONSTRAINT "DsnFields_dsnBlocId_fkey" FOREIGN KEY ("dsnBlocId") REFERENCES "DsnBlocs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
