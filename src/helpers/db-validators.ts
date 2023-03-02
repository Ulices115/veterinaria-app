const ObjectId = require('mongoose').Types.ObjectId;
export const { 
    Role, 
    Usuario,
    b_p,
    pedido,
    Servicio,
    producto,
    ubicacion,
    inventario,
    inventario_servicios,
    devoluciones,
    inventario_general,
    producto_servicio
} = require('../models'); 
export class validacionesdb{
    id_ubicacion=''
    ubicacion=''
    tipo=''
     esRoleValido = async(rol='') => {
        console.log('rol es',rol);
        const existeRol = await Role.findOne({rol:rol});
        console.log(existeRol);
        if (!existeRol){
            throw new Error(`El rol ${ rol } no esta registrado en la base de datos`)
        }
    }
    
     existeEmail = async(correo ='') => {
        const existe = await Usuario.findOne({correo});
        if(existe){
            throw new Error(`El correo: ${ correo } ya existe`)
        }
    } 
    
    existeUsuarioPorId = async( id:any ) => {
        const existeUsuario = await Usuario.findById( id )
        if( !existeUsuario ){
            throw new Error(`No existe id del usuario ${id}`);
        }
    }
      
    existeubicacion = async( id:any ) => { 
        const existeubicacion = await ubicacion.findOne({'descripcion':id.toUpperCase()}) 
        if( existeubicacion){
            throw new Error(`ya existe el producto${id}`);
        }
    }

    existeinventarioubi= async (id:any ) =>{
        this.id_ubicacion=id
        }
    

    existeservicioubi= async (id:any ) =>{
            this.ubicacion=id
            }
        
    esproductodevuelto= async (id:any) =>{
        console.log(id);
        
                const existeinv = await producto_servicio.find({$and:[{'descripcion':id},{tipo:'Producto'}]})
                console.log(existeinv);
                
                if(existeinv.length==0){
                    throw new Error(`La devolucion no es un producto `);
  
                }
            }
    
    //  existeRolePorId = async( id:any ) => {
    //     const existeRol = await Role.findById( id );
    //     if( !existeRol ){
    //         throw new Error(`No existe id del Rol: ${id}`);
    //     }
    // }
    
    existeb_pPorId = async( id:any ) => {
        const existeb_p = await b_p.findById( id );
        if( !existeb_p ){
            throw new Error(`No existe id del b_p ${id}`);
        }
    }
    existepedidob_p = async( id:any ) => {
        const b_ps = await b_p.findById( id );
        const pedidos = await pedido.find({$and:[{'id_b_p':b_ps['id_b_p']},{status_log:'carrito de compras'}]})
        console.log('pedidos',pedidos);
        
        if( pedidos.length>0 ){
            throw new Error(`existen pedidos pendientes para eñ b_p`);
        }
    }
    existepedidoPorId = async( id:any ) => {
        const existepedido = await pedido.findById( id );
        if( !existepedido ){
            throw new Error(`No existe id del pedido ${id}`);
        }
    }
    existepedido= async( id_pedido:any ) => {
        const existepedido = await pedido.find({'id_pedido':id_pedido });
        if( !existepedido ){
            throw new Error(`ya existe id del pedido ${id_pedido}`);
        }
    }
    // nuevos por la unificacion de tablas

    existeprod_serv = async( id:any ) => { 
        const existeproducto = await producto_servicio.findOne({'descripcion':id.toUpperCase()}) 
        if( existeproducto){
            throw new Error(`ya existe el producto/servicio :${id}`);
        }
    }
    existetipo= async (id:any ) =>{
        this.tipo=id
        }
    existeinventarioprod_serv= async (id:any) =>{
        const existeinv = await inventario_general.findOne({$and : [{'id_prod_serv':id}, {'ubicacion':this.id_ubicacion},{'tipo':this.tipo}]});
        if(existeinv){
            throw new Error(`El producto o servicio: ${id} ya existe en esa ubicacion `);
            
        }
    }
    existeinventario= async (id:any ) =>{
        const inv= await inventario_general.findById(id);
        console.log(inv['cantidad']);
                 if(inv['cantidad']>0){
            throw new Error(`Inventario con existencias `);
        }
        
    }
    // usuario-ubicacion de acceso
    existeubicacionu = async(ubicacionusuario:any) => { 
        // console.log('ubi',ubicacionusuario);
        if(ubicacionusuario!==''){
            const existe = await ubicacion.findOne({'descripcion':ubicacionusuario});
            if(existe==null){
                console.log('validacion:no existe la ubicacion');
                
                throw new Error(`validacion:no existe la ubicacion`)

            }
        }
         
      
       
    } 
    
}

export default new validacionesdb();
