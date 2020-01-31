const { Router } = require('express');
const router = Router();

const { getCasilleros, createCasillero, getCasillero, deleteCasillero, updateCasillero } = require('../controllers/casillero.controller');

router.route('/')
    .get(getCasilleros)
    .post(createCasillero);

router.route('/:id')
    .get(getCasillero)
    .delete(deleteCasillero)
    .put(updateCasillero);

module.exports = router;


