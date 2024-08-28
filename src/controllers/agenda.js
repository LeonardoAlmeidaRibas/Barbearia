const Agendamento = [];
let IdAgendamento = 1;

const model = (agenda, id = IdAgendamento++) => {
    if (agenda.nome != undefined && agenda.nome != '') {
        return {
            id,
            clienteId: IdCliente,
            servicoId: IdServico,
            horario: agenda.horario,
            avaliacao: agenda.avaliacao,
            estado: agenda.estado
        };
    }
};

const store = (body) => {
    const novo = model(body);

    if (novo) {
        Agendamento.push(novo);
        return 201;
    }

    return 400;
};

const index = () => Agendamento;

const show = (id) => Agendamento.find((el) => el.id == id);

const update = (id, body) => {
    const index = Agendamento.findIndex((el) => el.id == id);
    const novo = model(body, parseInt(id));

    if (novo && index != -1) {
        Agendamento[index] = novo;

        return 200;
    }

    return 404;
};

const destroy = (id) => {
    const index = Agendamento.findIndex((el) => el.id == id);

    if (index != -1) {
        Agendamento.splice(index, 1);
    }
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
};
