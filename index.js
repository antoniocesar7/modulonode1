const express = require ('express');
//console.log(express);

const server = express();

//localhost:3000/curso
server.get('/curso', (req,res) => {
    //console.log('ACESSOU A ROTA!!!');
    //return res.send('HELLO WORLD!');

    return  res.json({
        curso:'Node JS',
        aluno: 'Antonio'
    })
});

server.listen(3000);