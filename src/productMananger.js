import fs from 'fs';


const path = 'src/productos.json';


export default class ProductManager {
    consultarProductos = async (limite) => {
        if (fs.existsSync(path)) {
            const data = await fs.promises.readFile(path, 'utf-8');
            //parse la info obtenida
            const productos = JSON.parse(data);
            const productsLimit = []
            productos.map( pr => {
                if (pr.ID <= limite) { productsLimit.push(pr) }
            })

            if (limite == undefined) {
                return productos;
            } else {
                return productsLimit;
            }

        }
    };


    consultarProductosPorId = async (id) => {
        const productos = await this.consultarProductos(undefined);
        const producto = productos.find( prod => prod.ID == id)
        return producto
    }





}