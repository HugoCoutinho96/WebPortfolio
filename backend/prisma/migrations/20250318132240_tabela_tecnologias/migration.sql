-- CreateTable
CREATE TABLE "tecnologias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,

    CONSTRAINT "tecnologias_pkey" PRIMARY KEY ("id")
);
