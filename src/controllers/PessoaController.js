const Controller = require('./Controller');
const PessoaService = require('../services/PessoaService');
const pessoaService = new PessoaService();

class PessoalController extends Controller {
    constructor(){
        super(pessoaService);
    }
}

module.exports = PessoalController;