const Service = require('./Services');

class PessoaService extends Service{
    constructor(){
        super('Pessoa');
    }

    async pegaMatriculasPorEstudante(estudateId){
        try {
            const estudate = await super.pegaUmRegistroPorId(estudateId);
            const listaMatriculas = await estudate.getAulasMatriculadas();
            return listaMatriculas;
        } catch (error) {
            console.log(error);
            //erro
        }
    }
}

module.exports = PessoaService;