const { Router } = require("express");
const EventoController = require("../controller/EventoController");
const { validateEvento, validateEventoId } = require("../middlewares/ValidateEvento");

const router = Router();

router.post('/', validateEvento, (req, res) => {
    EventoController.create(req, res)
});

router.get('/', validateEvento, (req, res) => {
    EventoController.getAll(req, res)
});

router.delete('/:id', validateEvento, validateEventoId, (req, res) => {
    EventoController.delete(req, res)
});

router.put('/:id', validateEvento, validateEventoId, (req, res) => {
    EventoController.update(req, res)
});

router.get('/:id', validateEventoId, (req, res) => {
    EventoController.getOne(req, res)
});

module.exports = router;