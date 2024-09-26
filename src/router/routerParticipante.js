const { Router } = require("express");
const ParticipanteController = require("../controller/ParticipanteController");
const { validateParticipante, validateParticipanteId } = require("../middlewares/ValidateParticipante");

const router = Router();

router.post('/', validateParticipante, (req, res) => {
    ParticipanteController.create(req, res)
}); 

router.get('/', (req, res) => {
    ParticipanteController.getAll(req, res)
});

router.delete('/:id', validateParticipanteId, (req, res) => {
    ParticipanteController.delete(req, res)
});

router.put('/:id', validateParticipante, validateParticipanteId, (req, res) => {
    ParticipanteController.update(req, res)
});

router.get('/:id', validateParticipanteId, (req, res) => {
    ParticipanteController.getOne(req, res)
});

router.get('/por-evento/:eventoId', (req, res) => {
    ParticipanteController.getParticipantes(req, res)
});


module.exports = router;