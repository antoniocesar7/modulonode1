const express = require ('express');
//console.log(express);

const server = express();



//Request Body = {nome:'Nodejs',tipo:'Backend'}
 

//localhost:3000/curso
//Query params = ?nome=NodeJS
/*
server.get('/curso', (req,res) => {
    const nome = req.query.nome;
    const aluno = 'Antonio';

    return  res.json({
        curso:`Aprendendo ${nome}`,
        aluno:`Aluno ${aluno}`,
        
    })
});*/


//Route params = /curso/2
server.get('/curso/:id', (req,res) => {
    const id = req.params.id;
    

    return  res.json({
        curso:`Id do curso: ${id}`,
       
    })
});
server.listen(3000);