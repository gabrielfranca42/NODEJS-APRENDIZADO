import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post("/usuarios", async (req, res) => {
  const novoUsuario = await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(201).json(novoUsuario);
});

app.get("/usuarios", async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
});

//essa porr nao comita

app.put("/usuarios/:id", async (req, res) => {
  const usuarioAtualizado = await prisma.user.update({
    where: { id: parseInt(req.params.id) },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });

  res.status(200).json(usuarioAtualizado);
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: { id: parseInt(req.params.id) },
  });

  res.status(200).json({ message: "Usuário deletado com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
