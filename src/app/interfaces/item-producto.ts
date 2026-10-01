export interface ItemProducto {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    categoria: 'celulares' | 'laptops' | 'accesorios' | 'computadoras';
    enOferta: boolean;
    porcentajeDescuento?: number; 
    valoracion: number;          
    stock: number;
}
