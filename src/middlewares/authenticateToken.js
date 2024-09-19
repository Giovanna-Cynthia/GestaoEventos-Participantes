const jwt = require('jsonwebtoken');

function authenticateToken (req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token) {
        return res.status(401).json({
            msg: 'Acesso negado'
        });
    }

    jwt.verify(token, process.env.SECRET, (err, participante) => {
        if(err) {
            return res.status(403).json({
                msg: 'Acesso negado'
            })
        }

        //Armazanar usuario na requisocao
        req.participante = participante;

        next();
    })
}
module.exports = authenticateToken;