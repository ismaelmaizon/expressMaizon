import express from 'express';

import ProductManager from './src/productMananger.js';



const app = express();
const productMananger = new ProductManager();


app.get('/products', async (req, res) => {
    const limite = req.query.limit
    console.log(req.query.limit);
    const productos = await productMananger.consultarProductos(limite);
    res.send(productos)
});



app.get('/products/:pid', async (req, res) => {
    const id = req.params.pid;
    console.log(id);
    const producto = await productMananger.consultarProductosPorId(id);
    res.send(producto);
})

app.listen(8080, console.log('peticion ejecutandose'));
