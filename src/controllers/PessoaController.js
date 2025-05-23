const Controller = require('./Controller');
const PessoaService = require('../services/PessoaService');
const pessoaService = new PessoaService();

class PessoalController extends Controller {
    constructor(){
        super(pessoaService);
    }

    async PegaMatriculas(req, res){
        const {estudanteId} = req.params;
        try {
            const listaMatriculas = await pessoaService.pegaMatriculasPorEstudante(Number(estudanteId));
            return res.status(200).json(listaMatriculas);
        } catch (error) {
            //erro
        }
    }

}

module.exports = PessoalController;