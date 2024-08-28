const Clientes = [];
let IdCliente = 1;

const model = (cliente, id = IdCliente++) => {
    if (cliente.nome != undefined && cliente.nome != '') {
        return {
            id,
            nome: cliente.nome,
            telefone: cliente.telefone,
            email: cliente.email,
            senha: cliente.senha
        };
    }
};

const store = (body) => {
    const novo = model(body);

    if (novo) {
        Clientes.push(novo);
        return 201;
    }

    return 400;
};

const index = () => Clientes;

const show = (id) => Clientes.find((el) => el.id == id);

const update = (id, body) => {
    const index = Clientes.findIndex((el) => el.id == id);
    const novo = model(body, parseInt(id));

    if (novo && index != -1) {
        Clientes[index] = novo;

        return 200;
    }

    return 404;
};

const destroy = (id) => {
    const index = Clientes.findIndex((el) => el.id == id);

    if (index != -1) {
        Clientes.splice(index, 1);
    }
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy,
};
