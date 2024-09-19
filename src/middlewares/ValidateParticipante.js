const validateParticipante = (req, res, next) => {
    const {nome, email, eventoId} = req.body;

    if(!nome || !email || !eventoId) {
        return res.status(400).json ({
            msg: "Campos inválidos, revise.",
        });
    }
    return next();
};

const validateParticipanteId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).jsom({
            msg: "Parametro incompleto",
        });
    }
    return next();
}

module.exports = {validateParticipante, validateParticipanteId};