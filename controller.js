import express from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/usuarios", (req, res) => {
  users.push(req.body);
  res.send("OK aqui e flamengo");
});

app.get("/usuarios", (req, res) => {
  res.send("OK, deu bom");
});
//porra

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});