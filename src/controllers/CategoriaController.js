const Controller = require('./Controller');
const CategoriaService = require('../services/CategoriaService.js');
const categoriaService = new CategoriaService();

class CategoriaController extends Controller {
    constructor(){
        super(categoriaService);
    }
}

module.exports = CategoriaController;