/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia',
    precio: 150
}

const tableta: Producto = {
    desc: 'Ipad Air',
    precio: 350
}


export function calculaISV( productos: Producto[] ): [number, number]{

    let total = 0;

    productos.forEach( ( {precio} ) => {
        total += precio;
    } )

    return [total, total * 0.15];

}

const articulos: Producto[] = [ telefono, tableta ];

const isv = calculaISV( articulos );

//console.log('ISV:', isv);