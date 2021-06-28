let carrinho = []

const getAllMouse = (req, res) => {
    res.send(carrinho);
}

const getMouseById = (req, res) => {
    const id = req.params.id;
    let [mouse] = carrinho.filter(v => v.id == id)
    res.send(mouse)
}

const createMouse = (req, res) => {
    const newMouse = req.body
    carrinho = carrinho.concat(newMouse)
    res.status(201).send(newMouse)
}

const updateMouse = (req, res)  => {
    const id = req.params.id;
    const index = carrinho.findIndex(v => v.id === id)
    carrinho[index] = {...carrinho[index], ...req.body, id}
    res.sendStatus(200);
}

const deleteMouse = (req, res)  => {
    const id = req.params.id;
    carrinho = carrinho.filter(v => v.id != id)
    res.sendStatus(200);
}


module.exports = {
    getAllMouse,
    getMouseById,
    createMouse,
    updateMouse,
    deleteMouse,
};
