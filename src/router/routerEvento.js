const { Router } = require("express");
const EventoController = require("../controller/EventoController");
const { validateEvento, validateEventoId } = require("../middlewares/ValidateEvento");

const router = Router();

router.post('/evento', validateEvento, (req, res) => {
    EventoController.create(req, res)
});

router.get('/evento', validateEvento, (req, res) => {
    EventoController.getAll(req, res)
});

router.delete('/evento/:id', validateEvento, validateEventoId, (req, res) => {
    EventoController.delete(req, res)
});

router.put('evento/:id', validateEvento, validateEventoId, (req, res) => {
    EventoController.update(req, res)
});

router.get('evento/:id', validateEventoId, (req, res) => {
    EventoController.getOne(req, res)
});

module.exports = router;