const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const posts = require("../model/posts");
const cors = require("cors");

// Política de CORS para permitir acesso de origens (domínios) específicas.
const originOptions = {
    origin: "http://localhost:3000"
}

router.use(cors(originOptions));

router.get("/all", (req, res)=>{
    res.json(JSON.stringify(posts.getAll()));
}) 

router.post("/new", bodyParser.json(), (req, res)=>{

   let title = req.body.title;
   let description = req.body.description;
   posts.newPost(title, description);

    res.send("Novo POST adicionado com sucesso!");
})

router.delete("/:id", (req, res)=>{
    let id = req.params.id;
    posts.deletePost(id);

    res.send("Seu post foi deletado com sucesso");
})

module.exports = router;