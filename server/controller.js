module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err));
    },
    createProduct: (req, res) => {
        const {name, price, image} = req.body;

        const db = req.app.get('db');

        db.add_product(name, price, image)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    },
    deleteProduct: (req, res) => {
        const {id} = req.params

        const db = req.app.get('db')

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    updateProduct: (req, res) => {
        const {name, price, image} = req.body;

        const db = req.app.put('db')

        db.update_product()
        .then( product => res.status(200).send(product))
        .catch(err => res.status(500).send(err))
    }
}