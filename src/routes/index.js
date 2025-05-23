const express = require('express');
const pessoas = require('./pessoaRoute.js');
const cursos = require('./cursosRoute.js');
const categoria = require('./categoriasRoute.js');


module.exports = app => {
    app.use(
        express.json(),
        pessoas,
        categoria,
        cursos
    );
};