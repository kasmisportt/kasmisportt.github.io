const productos = [];

// Marcas
const marcas = [
    "Nike",
    "Adidas",
    "Puma",
    "Vans",
    "New Balance"
];

// Generar 1000 productos
for(let i = 1; i <= 1000; i++){

    const marca =
    marcas[Math.floor(Math.random() * marcas.length)];

    productos.push({

        id: i,

        nombre: `${marca} Modelo ${i}`,

        precio:
        `$${(200000 + i * 1000).toLocaleString()}`,

        marca: marca,

        imagen: "images.jpg",

        descripcion:
        `Zapato deportivo premium edición ${i}`

    });

}