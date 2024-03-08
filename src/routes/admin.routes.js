// ************ Require's ************
const express = require('express');
const router = express.Router();
const {create, store, edit, update, destroy}= require("../controllers/admin")

// esto son los ENDPOINT

// /admin 
/*** CREATE ONE PRODUCT ***/ 
router.get('/crear-producto/', create); // Crea
router.post('/crear-producto', store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id',edit); // renderizar
router.put('/editar-producto/:id', update); //actualizar

/*** DELETE ONE PRODUCT***/ 
router.delete('/eliminar-producto/:id', destroy); // eliminar

module.exports = router;