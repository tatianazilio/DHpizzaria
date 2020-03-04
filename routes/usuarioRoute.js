const express = require('express');

let route = express.Router();

route.get('/:nome', (req, res)=>{
    let {nome} = req.params;
    res.send(`Seja bem vindo, ${nome}`);
})


module.exports = route;