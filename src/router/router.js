const { Router } = require("express");

const eventoRoutes = require('./routerEvento');
const participanteRoutes = require('./routerParticipante');
const authenticateToken = require('../middlewares/authenticateToken');

const ParticipanteController = require("../controller/ParticipanteController");

const router = Router();

router.use('/participante', participanteRoutes);
router.use('/evento', eventoRoutes);

router.post('/login', (req, res) => {
    ParticipanteController.login(req, res)
});

module.exports = router;