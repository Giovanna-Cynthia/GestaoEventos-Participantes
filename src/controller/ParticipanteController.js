const Participante = require("../models/Participante");

const ParticipanteController = {
    create: async (req, res) => {
        try{
            const {nome, email, eventoId} = req.body;

            const participanteCriado = await Participante.create({nome, email, eventoId});

            return res.status(200).json({
                msg: "Participante criado com sucesso!",
                user: participanteCriado
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    update: async (req, res) => {
        try{
            const {id} = req.params; //usuario/atualizar/423423423
            const {nome, email, eventoId} = req.body;

            console.log("Atualizando objeto");
            console.log({id});
            console.log({nome, email, eventoId});

            const participanteUpdate = await Participante.findByPk(id);

            if(participanteUpdate == null) {
                return res.status(404).json({
                    msg: "Participante não encontrado"
                })
            }

            const updated = await participanteUpdate.update({
                nome, email, eventoId
            });

            if(updated) {
                return res.status(200).json({
                    msg: "Participante atualizado com sucesso!",
                });
            }

            return res.status(500).json({
                msg: "Erro ao atualizar participante"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    getAll: async (req, res) => {
        try{
            const participantes = await Participante.findAll();
            return res.status(200).json({
                msg: "Participantes encontrados!",
                participantes
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    getOne: async (req, res) => {
        const { id } = req.params;
        
        const participanteEncontrado = await Participante.findByPk(id);

        if(participanteEncontrado == null) {
            return res.status(404).json({
                msg: "Participante nao encontrado!"
            })
        }

        try{
            return res.status(200).json({
                msg: "Participante encontrado com sucesso!",
                usuario: participanteEncontrado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    },

    delete: async (req, res) => {
        try{
            const { id } = req.params;

            const participanteFinded = await Participante.findByPk(id);

            if(participanteFinded == null) {
                return res.status(404).json({
                    msg: "Participante não encontrado"
                })
            }
           
            await participanteFinded.destroy(); 

            return res.status(200).json({
                msg:"Participante deletado com sucesso!"
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte"});
        }
    }
}

module.exports = ParticipanteController;