class ProductManager {
    static idIncremento = 0;
    
        constructor(){
            this.products = [];
        }
    
        getProducts(){
            return this.products;
        }
    
        addProducts(titulo, descripcion, precio, miniatura, codigo, stock){
            ProductManager.idIncremento++;
            const code = this.products.find(c => c.codigo === codigo); 
                const nuevoProducto = {
                    id:ProductManager.idIncremento,
                    title: titulo,
                    desc: descripcion,
                    price: precio,
                    thumbnai: miniatura,
                    codigo: codigo,
                    stock: stock,
                } 
    
                const productoValidar = Object.values(nuevoProducto);
                const validarValores = productoValidar.filter( e=> e !== undefined);
                if(validarValores.length < 7){
                  console.error('faltan parametros');
                  return;
                }
              if(code){
                console.error('ya existe este codigo');
                return;
            }
                return this.products.push(nuevoProducto);
           
        }
    
        
    
        getProductsById(idP){
            const encontrar = this.products.findIndex(e => e.id === idP);
            if(encontrar < 0){
                console.error('Not found');
                return;
            }
            const productoEncontrado = this.products[encontrar];
            return productoEncontrado; 
        }
    };
    
    const myProductManager = new ProductManager();
    console.log(myProductManager.getProducts());
    console.log(myProductManager.addProducts( 'Producto Prueba','Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25));
    console.log(myProductManager.addProducts('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25));
    console.log(myProductManager.addProducts( 'Este es un producto prueba', 200, 'Sin imagen', 'abc1234', 25));
    console.log(myProductManager.getProducts());
    console.log(myProductManager.getProductsById(1));
    
    
    const fs = require('fs/promises')
    const { existsSync } = require('fs');
    
    class ProductManagerClase2{
    
    }