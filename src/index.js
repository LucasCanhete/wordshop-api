import express from "express"
const PORT = 3000

const api = express()
api.use(express.json()) // liberar requisição com body json

api.get("/", (req, res) => {
    res.send("API Wordshop")
})

api.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`)
})