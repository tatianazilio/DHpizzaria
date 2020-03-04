const Cardapio = require('../models/Cardapio');

let cardapioController = {
    listarCardapio: (req,res) => {
        let listaDePizzas = Cardapio.listarCardapio();
        res.send(listaDePizzas);
    }
}

module.exports = cardapioController;