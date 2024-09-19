const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose 
 .connect("mongodb://localhost:27017/livraria")// não seria livraria
 .then(() => console.log("Conectando o MongoDB"))
 .catch((erro)=> console.error("Conectando o MongoDB", erro));

/*  nome,data,horario,genero */ 

const esquemaDorama = new mongoose.Schema({
 // id:{ type: String, required: true},
   nome:{ type: String, required: true},
   data:{ type: String, required: true},
   horario:{ type: String, required: true},
   genero:{ type: String, required: true},

})
const Dorama = mongoose.model("Dorama", esquemaDorama);{
  async function criarDorama(nome, data, horario, genero) { 
    try {
      const novoDorama = new Dorama ({ nome, data, horario, genero});
      return await novoDorama.save();
    } catch (erro) {//
      console.error("Erro ao criar dorama:", erro);
      throw erro;//
    }
  }

    app.post("/Dorama", async (req, res) => {
    try {
      const { nome, data,horario, genero } = req.body;
      const novoDorama = await criarDorama(nome, data, horario, genero);//
      res
        .status(201)
        .json({ mensagem: " Dorama foi criado com sucesso 🤓!! ", dorama: novoDorama });//
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao criar dorama", erro: erro.message });

    }
  });
    async function listarDorama() { // arrumar ou ver isso aqui que esta estranho 😁
    try {
      return await Dorama.find();
    } catch (erro) {//
      console.error("Erro ao obter dorama", erro);
      throw erro;//
    }
  }


  app.get("/Dorama", async (req, res) => {
    try {
      const listarDorama = await Dorama.findByIdAndUpdate(
        id,
        { nome, data, horario, genero },
        { new: true, runValidators: true }
      );
      return doramaAtualizado;
    } catch (erro) {
      console.error("Erro ao atualizar o dorama:", erro);
      throw erro;
    }
  }
  )
  app.put("/Dorama/:id", async (req, res) => { 
    try { 
    const  {id} = req.params;
    const {nome, data, horario, genero} = req.body;
    const doramaAtualizado = await atualizarDorama(
       id,
       nome,
       data,
       horario,
       genero
    );
    if(doramaAtualizado){
      res 
      .status(200)
      .json( { 
        mensagem: "Dorama atualizado com sucesso ",
        dorama: doramaAtualizado,
      })
    }else{ 
      res.status(404).json({mensagem:"O dorama não foi encontrado"});
    }
   }  catch(erro){ 
    res 
    .status(500)
    .json ({mensagem:"Erro ao atualizar dorama", erro : erro.menssage})
    }
  });

  async function deletarDorama(id) {
    try {
      const doramaDeletado = await Dorama.findByIdAndDelete(id);
      return doramaDeletado;
    } catch (erro) {
      console.error("Erro ao deletar dorama:", erro);
      throw erro;
    }
  }
  
  app.delete("/Dorama/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const doramaDeletado = await deletarDorama(id);
      if (doramaDeletado) {
        res
          .status(200)
          .json({ mensagem: "Dorama foi deletado com sucesso", dorama: doramaDeletado });
      } else {
        res.status(404).json({ mensagem: "Dorama não foi encontrado" });
      }
    } catch (erro) {
      res
        .status(500)
        .json({ mensagem: "Erro ao deletar dorama", erro: erro.message });
    }
  });
  
  const port = 3000;
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}
  
  
  
  