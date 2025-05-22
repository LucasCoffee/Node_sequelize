const dataSource = require('../models');

class Service{
    constructor(nomeDoModel){
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros(){
        return await dataSource[this.model].findAll();
    }

    async pegaUmRegistroPorId(id) {
        return dataSource[this.model].findByPk(id);
    }

    async criaRegistro(dadosDoRegistro) {
        return dataSource[this.model].create(dadosDoRegistro);
    }

    async AtualizaRegistro(dadosAtualizados, id){
        console.log('ponto 1');
        const ListaDeRegistroAtualizado = await dataSource[this.model]
            .update(
                dadosAtualizados,
                { where: {
                    id: id
                }}
            );
        
        if(ListaDeRegistroAtualizado[0] === 0) return false;
        return true;
    }

    async excluiRegistro(id) {
        return dataSource[this.model].destroy({ where: { id: id } });
    }

}

module.exports = Service;