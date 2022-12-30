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
    
    
    const suma = (num, numSuma)=>{
        return new Promise((resolve,reject)=>{
          if(num + numSuma === 0){
            reject('no se puede sumar un numero que de 0')
          }if(num === 0 || numSuma === 0){
            reject('operacion incecesaria')
          }else{
            resolve(num + numSuma);
          };
        })
      };
      const resta = (num, numResta)=>{
        return new Promise((resolve,reject)=>{
          if(num === 0 || numResta === 0){
            reject('no se puede restar un numero que de 0');
          }if(num-numResta < 0){
            reject('no se devuelven numeros negativos');
          }if(num - numResta === 0){
            reject('operacion invalida');
          }
          else{
            resolve(num - numResta);
          };
        })
      };
      
      const multi = (num, mult)=>{
        return new Promise((result,reject)=>{
          if(num*mult < 0){
            reject('La calculadora solo devuelve valores positivos');
          } if(num === 0 || mult === 0){
            reject('no se puede multiplicar un numero que sea 0');
          }else{
            result(num*mult);
          };
        })
      };
      
      
      const Calculos = async()=>{
        try{
          let resultado = await multi(1,2);
          console.log(resultado);
        }
        catch(error){
          console.log(error);
        }
      };
      
      Calculos();
    