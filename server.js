import express from "express";

const app = express()

app.get(`/usuarios `, (req, res)=>{
    app.send(`OK, deu bom`)
})

app.listen(3000)

