const router = require('express').Router();
const controlador = require('../../controllers/controlador.js');
const db = require('../../models')


router.post('/signin',controlador.login);

router.get ('/buscar', function(req, res) {     
    db.user.findAll().then(users => res.json(users)) });

module.exports = router;
