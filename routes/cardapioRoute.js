const express = require('express');
const cardapioController = require('../controllers/cardapioController');

let route = express.Router();

route.get('/ver', cardapioController.listarCardapio);

route.get('/cadastrar/:pizza/:preco', (req, res)=>{
    let {pizza} = req.params;
    let {preco} = req.params;
    res.send(`Você cadastrou a pizza ${pizza}, no valor de R$ ${preco}`);
})


module.exports = route;