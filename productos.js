const productos = [
    {
        id: 1,
        nombre: "Nike Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "1.webp",
        descripcion: "Negro / Gris menta - Suela gruesa, detalles naranja, cordón elástico negro"
    },
    {
        id: 2,
        nombre: "Louis Vuitton LV Trainer",
        precio: "$250.000",
        marca: "Louis Vuitton",
        imagen: "2.webp",
        descripcion: "Negro / Blanco - Monograma LV en suela y lateral, chunky"
    },
    {
        id: 3,
        nombre: "Converse Chuck Taylor All Star Hi (Alistar collab)",
        precio: "$250.000",
        marca: "Converse",
        imagen: "3.webp",
        descripcion: "Blanco / Multicolor - Bordados mandalas, suela plataforma"
    },
    {
        id: 4,
        nombre: "Adidas Samba",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "4.webp",
        descripcion: "Negro / Blanco - Tres rayas, suela goma negra"
    },
    {
        id: 5,
        nombre: "Reebok Classic Leather",
        precio: "$250.000",
        marca: "Reebok",
        imagen: "5.webp",
        descripcion: "Beige / Marrón - Gamuza bicolor, logo UK"
    },
    {
        id: 6,
        nombre: "Reebok Classic Leather",
        precio: "$250.000",
        marca: "Reebok",
        imagen: "6.webp",
        descripcion: "Azul marino / Azul cielo / Blanco - Gamuza bicolor, logo UK"
    },
    {
        id: 7,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "7.webp",
        descripcion: "Negro, Blanco, Gris, Verde oliva, Rojo, Amarillo, Azul, Naranja, Teal (múltiples) - Foto grupal varios colorways"
    },
    {
        id: 8,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "8.webp",
        descripcion: "Blanco / Negro / Gum - Suela goma caramelo, swoosh negro"
    },
    {
        id: 9,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "9.webp",
        descripcion: "Blanco total - Script \"Young Forever\" lateral"
    },
    {
        id: 10,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "10.webp",
        descripcion: "Verde oliva / Blanco - Slip-on, knit"
    },
    {
        id: 11,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "11.webp",
        descripcion: "Negro / Blanco - Slip-on, knit"
    },
    {
        id: 12,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "12.webp",
        descripcion: "Rojo / Blanco - Slip-on, knit"
    },
    {
        id: 13,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "13.webp",
        descripcion: "Negro total - Slip-on, suela negra"
    },
    {
        id: 14,
        nombre: "Skechers Vapor Foam",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "14.webp",
        descripcion: "Gris carbón / Blanco / Detalles neón amarillo - Slip-on, suela chunky"
    },
    {
        id: 15,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "15.webp",
        descripcion: "Beige / Teal / Naranja - Lona cruda, detalle serpiente naranja"
    },
    {
        id: 16,
        nombre: "Le Coq Sportif Omega",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "16.webp",
        descripcion: "Azul marino / Blanco / Gris - Suede bicolor, logo gallo"
    },
    {
        id: 17,
        nombre: "Le Coq Sportif Omega",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "17.webp",
        descripcion: "Negro / Rojo (suela) - Logo gallo negro, suela roja"
    },
    {
        id: 18,
        nombre: "Le Coq Sportif Omega",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "18.webp",
        descripcion: "Gris / Azul marino / Marrón - Tejido mixto, etiqueta colgante"
    },
    {
        id: 19,
        nombre: "Nike / Jordan Air Jordan 1 Mid",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "19.webp",
        descripcion: "Negro charol / Blanco / Hielo - Cuero charolado"
    },
    {
        id: 20,
        nombre: "Nike / Jordan Air Jordan 1 Mid",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "20.webp",
        descripcion: "Rosa / Uva / Crema / Gum - Cuero multicolor, swoosh vino"
    },
    {
        id: 21,
        nombre: "Nike / Jordan Air Jordan 1 Mid",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "21.webp",
        descripcion: "Beige / Negro - Cuero bicolor, cordones crema"
    },
    {
        id: 22,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "22.webp",
        descripcion: "Negro / Blanco - Running, rayas reflectantes"
    },
    {
        id: 23,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "23.webp",
        descripcion: "Blanco / Azul marino / Rosa - Running, detalles fucsia"
    },
    {
        id: 24,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "24.webp",
        descripcion: "Negro / Blanco - Running, rayas sólidas"
    },
    {
        id: 25,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "25.webp",
        descripcion: "Blanco / Negro / Rosa - Running, detalles fucsia"
    },
    {
        id: 26,
        nombre: "Converse Chuck Taylor All Star Lift Hi",
        precio: "$250.000",
        marca: "Converse",
        imagen: "26.webp",
        descripcion: "Crema / Bordados florales multicolor - Plataforma alta, flores bordadas"
    },
    {
        id: 27,
        nombre: "Converse Chuck Taylor All Star Lift Hi",
        precio: "$250.000",
        marca: "Converse",
        imagen: "27.webp",
        descripcion: "Negro / Bordados naturaleza multicolor - Plataforma, luna, sol, hojas bordadas"
    },
    {
        id: 28,
        nombre: "Nike Air Max BW",
        precio: "$250.000",
        marca: "Nike",
        imagen: "28.webp",
        descripcion: "Blanco / Gris / Azul / Rojo coral - Unidad Air visible, suela roja"
    },
    {
        id: 29,
        nombre: "Nike Shox TL",
        precio: "$250.000",
        marca: "Nike",
        imagen: "29.webp",
        descripcion: "Negro total - Columnas Shox negras"
    },
    {
        id: 30,
        nombre: "Sin nombre",
        precio: "$250.000",
        marca: "—",
        imagen: "30.webp",
        descripcion: "31"
    },
    {
        id: 31,
        nombre: "Sin nombre",
        precio: "$250.000",
        marca: "—",
        imagen: "31.webp",
        descripcion: "33"
    },
    {
        id: 32,
        nombre: "Sin nombre",
        precio: "$250.000",
        marca: "—",
        imagen: "32.webp",
        descripcion: "35"
    },
    {
        id: 33,
        nombre: "Puma California",
        precio: "$250.000",
        marca: "Puma",
        imagen: "33.webp",
        descripcion: "Kaki / Blanco - Suede perforado, logo California"
    },
    {
        id: 34,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "34.webp",
        descripcion: "Blanco / Vino / Crema - Leather, cordones rojo + beige, detalles dorados"
    },
    {
        id: 35,
        nombre: "On Running Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "35.webp",
        descripcion: "Negro total - Suela CloudTec"
    },
    {
        id: 36,
        nombre: "On Running Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "36.webp",
        descripcion: "Beige rosado / Negro / Blanco - Knit bicolor"
    },
    {
        id: 37,
        nombre: "On Running Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "37.webp",
        descripcion: "Gris total - Monotono"
    },
    {
        id: 38,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "38.webp",
        descripcion: "Beige / Negro / Blanco - Sin cordones, sock fit"
    },
    {
        id: 39,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "39.webp",
        descripcion: "Negro / Gris - Sin cordones"
    },
    {
        id: 40,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "40.webp",
        descripcion: "Lila / Blanco - Tono lila pálido"
    },
    {
        id: 41,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "41.webp",
        descripcion: "Negro total - Sin cordones, chunky"
    },
    {
        id: 42,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "42.webp",
        descripcion: "Negro total / Detalle verde neón - Hologram verde, basketball high"
    },
    {
        id: 43,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "43.webp",
        descripcion: "Negro / Gris / Azul holográfico - Lateral charolado con rosas en relieve"
    },
    {
        id: 44,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "44.webp",
        descripcion: "Azul marino / Blanco / Gris - Hologram verde, panel punteado"
    },
    {
        id: 45,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "45.webp",
        descripcion: "Blanco / Gris / Rojo - Hologram gris, suela roja"
    },
    {
        id: 46,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "46.webp",
        descripcion: "Negro / Rojo - \"Bred\" colorway, hologram gris"
    },
    {
        id: 47,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "47.webp",
        descripcion: "Negro / Blanco / Gris / Rojo - Panel punteado, hologram plateado"
    },
    {
        id: 48,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "48.webp",
        descripcion: "Blanco / Rojo / Negro - \"Chicago\" colorway, hologram verde"
    },
    {
        id: 49,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "49.webp",
        descripcion: "Blanco / Mostaza / Gum - Hologram verde, suela goma"
    },
    {
        id: 50,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "50.webp",
        descripcion: "Gris suede / Blanco - Cuero suede monocromático, swoosh tonal"
    },
    {
        id: 51,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "51.webp",
        descripcion: "Crema / Azul gris - Collab The North Face, etiqueta colgante"
    },
    {
        id: 52,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "52.webp",
        descripcion: "Verde oliva / Blanco - Leather bicolor clásico"
    },
    {
        id: 53,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "53.webp",
        descripcion: "Rosa / Blanco / Gris - Suede, logo N blanco"
    },
    {
        id: 54,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "54.webp",
        descripcion: "Blanco / Rosa - Suede, logo N rosado, suela ENCAP"
    },
    {
        id: 55,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "55.webp",
        descripcion: "Blanco / Salmón - Suede, logo N salmón"
    },
    {
        id: 56,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "56.webp",
        descripcion: "Gris / Azul marino / Blanco - Suede, logo N navy"
    },
    {
        id: 57,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "57.webp",
        descripcion: "Crema / Rosa / Blanco - Suede, suela con speckle rosado"
    },
    {
        id: 58,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "58.webp",
        descripcion: "Blanco total / Gum - Cuero liso, logo N tonal"
    },
    {
        id: 59,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "59.webp",
        descripcion: "Crema / Azul cielo / Negro - Suede bicolor"
    },
    {
        id: 60,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "60.webp",
        descripcion: "Gris / Azul marino / Kaki - Suede, logo N navy"
    },
    {
        id: 61,
        nombre: "New Balance 9060",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "61.webp",
        descripcion: "Gris total / Plateado - Chunky, suede y mesh"
    },
    {
        id: 62,
        nombre: "Nike V2K Run / Zoom Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "62.webp",
        descripcion: "Blanco / Crema / Gris - Running retro chunky"
    },
    {
        id: 63,
        nombre: "Nike V2K Run / Zoom Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "63.webp",
        descripcion: "Blanco / Gris / Swoosh negro - Running retro, etiqueta naranja corazón"
    },
    {
        id: 64,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "64.webp",
        descripcion: "Morado / Lila / Rosa / Blanco - Trail running, suela chunky"
    },
    {
        id: 65,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "65.webp",
        descripcion: "Rosa / Blanco - Trail running, suela rosa"
    },
    {
        id: 66,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "66.webp",
        descripcion: "Negro / Blanco - Trail running, suela blanca"
    },
    {
        id: 67,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "67.webp",
        descripcion: "Blanco total - Trail running, suela blanca"
    },
    {
        id: 68,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "68.webp",
        descripcion: "Negro / Blanco - Running, LightstrikePro"
    },
    {
        id: 69,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "69.webp",
        descripcion: "Blanco / Gris / Rojo coral - Running, LightstrikePro"
    },
    {
        id: 70,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "70.webp",
        descripcion: "Gris oscuro / Negro / Naranja - Running, LightstrikePro"
    },
    {
        id: 71,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "71.webp",
        descripcion: "Negro total / Gris iridiscente - Running, LightstrikePro"
    },
    {
        id: 72,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "72.webp",
        descripcion: "Blanco / Negro / Naranja - Running, LightstrikePro"
    },
    {
        id: 73,
        nombre: "Nike Air Max BW",
        precio: "$250.000",
        marca: "Nike",
        imagen: "73.webp",
        descripcion: "Blanco / Gris / Azul / Rojo coral - Unidad Air visible"
    },
    {
        id: 74,
        nombre: "New Balance 574 (estilo nuevo)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "74.webp",
        descripcion: "Gris / Azul marino / Gum - Suela gum, logo N navy"
    },
    {
        id: 75,
        nombre: "New Balance 574 (estilo nuevo)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "75.webp",
        descripcion: "Negro / Blanco - Cuero y mesh"
    },
    {
        id: 76,
        nombre: "Dolce & Gabbana NS1 Sneaker",
        precio: "$250.000",
        marca: "Dolce & Gabbana",
        imagen: "76.webp",
        descripcion: "Negro total - Bandas D&G, suela con logo DG"
    },
    {
        id: 77,
        nombre: "Dolce & Gabbana NS1 Sneaker",
        precio: "$250.000",
        marca: "Dolce & Gabbana",
        imagen: "77.webp",
        descripcion: "Blanco total - Bandas D&G, suela con logo DG"
    },
    {
        id: 78,
        nombre: "Dolce & Gabbana NS1 Sneaker",
        precio: "$250.000",
        marca: "Dolce & Gabbana",
        imagen: "78.webp",
        descripcion: "Negro / Rojo / Gris / Blanco - Multicolor, bandas D&G"
    },
    {
        id: 79,
        nombre: "New Balance 990v6",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "79.webp",
        descripcion: "Gris / Beige / Blanco - Made in USA, suela clásica"
    },
    {
        id: 80,
        nombre: "New Balance 57/40",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "80.webp",
        descripcion: "Gris / Azul pizarra / Blanco - Chunky retro"
    },
    {
        id: 81,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "81.webp",
        descripcion: "Blanco / Gris / Crema / Negro - Running retro chunky, CushTec"
    },
    {
        id: 82,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "82.webp",
        descripcion: "Blanco / Rosa / Azul marino - CushTec, chunky femenino"
    },
    {
        id: 83,
        nombre: "Nike V2K Run / Zoom Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "83.webp",
        descripcion: "Blanco / Plateado / Lila - CushTec, chunky"
    },
    {
        id: 84,
        nombre: "Nike Air Max 90 (collab)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "84.webp",
        descripcion: "Negro / Blanco / Charol - \"Los Técnicos\" edición especial"
    },
    {
        id: 85,
        nombre: "Nike Air Zoom Pegasus",
        precio: "$250.000",
        marca: "Nike",
        imagen: "85.webp",
        descripcion: "Negro / Blanco - Air Zoom, running"
    },
    {
        id: 86,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "86.webp",
        descripcion: "Blanco / Rosa / Azul marino - CushTec"
    },
    {
        id: 87,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "87.webp",
        descripcion: "Plateado / Lila / Blanco - CushTec metalizado"
    },
    {
        id: 88,
        nombre: "Nike Air Zoom Pegasus 41 XL",
        precio: "$250.000",
        marca: "Nike",
        imagen: "88.webp",
        descripcion: "Crema / Dorado / Gum - Air Zoom, swoosh dorado"
    },
    {
        id: 89,
        nombre: "Nike Pegasus Trail / Wild Horse",
        precio: "$250.000",
        marca: "Nike",
        imagen: "89.webp",
        descripcion: "Blanco / Crema / Vino / Teal - Trail running"
    },
    {
        id: 90,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "90.webp",
        descripcion: "Negro total - Unidad Air, suela negra"
    },
    {
        id: 91,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "91.webp",
        descripcion: "Crema / Gris / Marrón gum - Chunky retro, swoosh plateado tonal, detalles cuero marrón"
    },
    {
        id: 92,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "92.webp",
        descripcion: "Rojo total - Leather y mesh, unidad Air visible, suela roja (\"Red October\")"
    },
    {
        id: 93,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "93.webp",
        descripcion: "Negro / Blanco - Chunky retro, swoosh blanco metálico, suela blanca"
    },
    {
        id: 94,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "94.webp",
        descripcion: "Blanco total - Cuero y mesh, unidad Air visible, suela blanca"
    },
    {
        id: 95,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "95.webp",
        descripcion: "Azul rey / Amarillo / Blanco gum - Fútbol sala, texto \"II GATO\", suela goma caramelo"
    },
    {
        id: 96,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "96.webp",
        descripcion: "Negro / Amarillo / Rojo - Fútbol sala, texto \"GATO\", swoosh amarillo con borde rojo"
    },
    {
        id: 97,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "97.webp",
        descripcion: "Rojo / Blanco / Negro - Fútbol sala, texto \"GATO\", suela traslúcida con patrón cuadros"
    },
    {
        id: 98,
        nombre: "Nike / Supreme SB Gato IC",
        precio: "$250.000",
        marca: "Nike / Supreme",
        imagen: "98.webp",
        descripcion: "Negro / Blanco / Rosa - Fútbol sala, collab Supreme, paneles laterales rosa rayado"
    },
    {
        id: 99,
        nombre: "Adidas Climacool / Ozweego",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "99.webp",
        descripcion: "Blanco / Rosa / Menta / Azul - Suela chunky transparente multicolor, upper knit, logo trébol azul"
    },
    {
        id: 100,
        nombre: "Nike / Levi's Air Max 95",
        precio: "$250.000",
        marca: "Nike / Levi's",
        imagen: "100.webp",
        descripcion: "Gris denim / Negro - Collab Levi's, upper en tela denim azul grisáceo, etiqueta Levi's"
    },
    {
        id: 101,
        nombre: "Nike / BAPE Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike / BAPE",
        imagen: "101.webp",
        descripcion: "Crema / Verde oliva / Camo - Collab A Bathing Ape, swoosh camo, logo mono BAPE en lateral"
    },
    {
        id: 102,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "102.webp",
        descripcion: "Blanco / Verde oliva - Bordado \"face\" en lateral, swoosh verde oliva, suela oliva"
    },
    {
        id: 103,
        nombre: "Nike Air Zoom Terra Kiger / Wildhorse",
        precio: "$250.000",
        marca: "Nike",
        imagen: "103.webp",
        descripcion: "Blanco / Negro / Rosa neón - Trail running, suela Vibram rosa neón, upper knit perforado"
    },
    {
        id: 104,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "104.webp",
        descripcion: "Negro total / Gum - Suede y mesh, logo AX grande, suela goma caramelo"
    },
    {
        id: 105,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "105.webp",
        descripcion: "Gris / Verde oliva / Blanco - Suede y mesh, logo AX blanco"
    },
    {
        id: 106,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "106.webp",
        descripcion: "Blanco / Crema / Gum - Suede y mesh monótono, logo AX tonal, suela gum"
    },
    {
        id: 107,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "107.webp",
        descripcion: "Vino / Blanco / Gum - Suede y mesh, logo AX blanco, suela gum crema"
    },
    {
        id: 108,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "108.webp",
        descripcion: "Beige / Blanco / Marino - Suede y mesh, logo AX blanco, suela blanca"
    },
    {
        id: 109,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "109.webp",
        descripcion: "Negro / Blanco - Suede y mesh, logo AX blanco grande, suela negra"
    },
    {
        id: 110,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "110.webp",
        descripcion: "Azul marino / Blanco - Suede y mesh, logo AX blanco, suela marino"
    },
    {
        id: 111,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "111.webp",
        descripcion: "Negro / Blanco - Suede liso, logo AX blanco, suela blanca (estilo diferente al 112)"
    },
    {
        id: 112,
        nombre: "Nike Air Zoom Pegasus 37/38",
        precio: "$250.000",
        marca: "Nike",
        imagen: "112.webp",
        descripcion: "Salmón / Negro / Magenta - Running, Air Zoom full-length, texto \"Pegasus\" en lengüeta"
    },
    {
        id: 113,
        nombre: "Nike Air Monarch IV",
        precio: "$250.000",
        marca: "Nike",
        imagen: "113.webp",
        descripcion: "Blanco / Azul marino - Cuero liso, swoosh marino outline, texto \"AIR MONARCH\""
    },
    {
        id: 114,
        nombre: "Nike Air Monarch IV",
        precio: "$250.000",
        marca: "Nike",
        imagen: "114.webp",
        descripcion: "Blanco / Gris / Naranja - Cuero liso, swoosh gris, detalle naranja en suela lateral"
    },
    {
        id: 115,
        nombre: "Le Coq Sportif Veloce / Runner",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "115.webp",
        descripcion: "Negro total / Rojo (suela) - Logo gallo metálico, upper nylon, suela roja"
    },
    {
        id: 116,
        nombre: "Nike / Jordan Air Jordan 3 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "116.webp",
        descripcion: "Blanco total / Crema - \"Pure White\", paneles elefante crema, suela blanca"
    },
    {
        id: 117,
        nombre: "Nike / Jordan Air Jordan 3 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "117.webp",
        descripcion: "Negro / Gris / Blanco - \"Black Cement\", paneles elefante gris, suela blanca, dos pares en foto"
    },
    {
        id: 118,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "118.webp",
        descripcion: "Negro / Gris cemento (\"Black Cement\") - Upper gamuza negra, panel cemento gris, suela blanca, burbuja Air, caja Jordan negra + tag AIR"
    },
    {
        id: 119,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "119.webp",
        descripcion: "Verde esmeralda / Crema / Naranja - Upper gamuza verde, \"NIKE AIR\" en talón, detalles naranja, suela crema/beige"
    },
    {
        id: 120,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "120.webp",
        descripcion: "Negro / Azul rey / Gris - Upper negro, panel azul en talón, burbuja Air, caja Jordan \"Flight\", cordones negros"
    },
    {
        id: 121,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "121.webp",
        descripcion: "Blanco / Azul universitario - Upper cuero blanco, acentos azul UNC, burbuja Air crema, tag AIR rojo, detalles \"OG\""
    },
    {
        id: 122,
        nombre: "Air Jordan Jordan 3 × Fragment Design",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "122.webp",
        descripcion: "Blanco / Negro - Collab Fragment, upper cuero blanco texturizado, panel negro en base, \"fragment\" en talón, caja roja"
    },
    {
        id: 123,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "123.webp",
        descripcion: "Crema / Camel / Negro / Naranja - Upper nubuck camel/crema, panel cemento negro, ojales amarillos, suela blanca"
    },
    {
        id: 124,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "124.webp",
        descripcion: "Blanco / Rosa dusty - Upper cuero blanco, panel gamuza rosa viejo con floral grabado, suela gris, mujer"
    },
    {
        id: 125,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "125.webp",
        descripcion: "Blanco / Azul cielo / Rosa - Upper cuero blanco, panel crema azul cielo, detalles rosa, Jumpman rosa, suela azul hielo"
    },
    {
        id: 126,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "126.webp",
        descripcion: "Rosa melocotón / Crema / Burdeos - Upper satén rosa melocotón, panel cemento burdeos, Jumpman rojo, cordones rosas, mujer"
    },
    {
        id: 127,
        nombre: "Nike Invincible Run 3",
        precio: "$250.000",
        marca: "Nike",
        imagen: "127.webp",
        descripcion: "Gris / Azul navy / Menta - Upper knit gris speckle, \"INVINCIBLE RUN 3\" en talón, suela crema/amarillenta gruesa, tira menta"
    },
    {
        id: 128,
        nombre: "Nike Invincible Run 3",
        precio: "$250.000",
        marca: "Nike",
        imagen: "128.webp",
        descripcion: "Blanco crema / Azul navy - Upper knit blanco texturizado, swoosh tonal crema, suela crema, outsole navy"
    },
    {
        id: 129,
        nombre: "Nike ZoomX Invincible Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "129.webp",
        descripcion: "Azul cielo / Azul petróleo - \"ZOOMX\" en lateral, upper knit azul speckle, suela crema robusta, outsole azul petróleo"
    },
    {
        id: 130,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "130.webp",
        descripcion: "Negro total - Suela TN con cámaras de aire negras, upper negro con swoosh tonal, paneles negros laqueados"
    },
    {
        id: 131,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "131.webp",
        descripcion: "Negro / Rojo - \"ADISTAR\" + \"REPETITOR\" en suela, upper mesh negro, 3 barras negras, outsole roja, tag verde"
    },
    {
        id: 132,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "132.webp",
        descripcion: "Negro / Blanco / Verde neón - Upper mesh negro, 3 barras blancas, suela blanca \"REPETITOR\", outsole verde neón, tag verde"
    },
    {
        id: 133,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "133.webp",
        descripcion: "Negro / Blanco - Upper mesh negro, 3 barras negras tonal, suela blanca \"REPETITOR\", perfil running limpio"
    },
    {
        id: 134,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "134.webp",
        descripcion: "Negro total - Upper mesh negro, 3 barras tonal oscuro, suela \"REPETITOR\" negra, outsole negra"
    },
    {
        id: 135,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "135.webp",
        descripcion: "Negro / Blanco / Rojo - Upper mesh negro, 3 barras negras, suela blanca \"REPETITOR\", outsole roja en talón"
    },
    {
        id: 136,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "136.webp",
        descripcion: "Negro / Blanco - Upper mesh negro, 3 barras blancas anchas, suela \"REPETITOR\" blanca, outsole blanca"
    },
    {
        id: 137,
        nombre: "Diesel S-Tyche",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "137.webp",
        descripcion: "Negro / Azul / Rojo / Blanco - \"DIESEL DIESEL\" en lateral, logo D blanco, panel azul en talón, detalles rojo en suela, upper nylon"
    },
    {
        id: 138,
        nombre: "Diesel S-Tyche",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "138.webp",
        descripcion: "Negro / Blanco - \"DIESEL DIESEL\" + \"FOR SUCCESSFUL LIVING\", upper nylon/gamuza negro, logo D reflectivo, suela blanca"
    },
    {
        id: 139,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "139.webp",
        descripcion: "Blanco / Azul navy - Upper cuero blanco, mini swoosh navy, collarín navy canvas, \"AIR\" en suela, suela navy"
    },
    {
        id: 140,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "140.webp",
        descripcion: "Blanco / Negro / Café (Mocha) - Upper cuero blanco, swoosh negro, panel gamuza café mocha en talón, suela crema envejecida"
    },
    {
        id: 141,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "141.webp",
        descripcion: "Crema / Verde teal / Naranja - Upper canvas burlap crema, swoosh teal tejido, suela verde, detalles naranja y turquesa, manchas paint"
    },
    {
        id: 142,
        nombre: "Adidas Handball Spezial",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "142.webp",
        descripcion: "Rojo / Blanco / Gum - \"SPEZIAL\" dorado en lateral, gamuza roja, 3 rayas blancas, suela gum translúcida"
    },
    {
        id: 143,
        nombre: "Adidas Pureboost / RunFalcon",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "143.webp",
        descripcion: "Blanco / Turquesa - Upper knit/mesh blanco, 3 barras turquesa, suela blanca running, logo Adidas azul"
    },
    {
        id: 144,
        nombre: "Adidas Pureboost / RunFalcon",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "144.webp",
        descripcion: "Blanco / Azul rey / Rojo - Upper mesh blanco, 3 barras azul rey, collarín azul, detalles rojos en outsole, suela blanca"
    },
    {
        id: 145,
        nombre: "Air Jordan Jordan 12 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "145.webp",
        descripcion: "Negro / Dorado (\"Royalty\") - Upper nubuck negro, herrajes dorados, Jumpman dorado, suela negra, numeración dorada en lateral"
    },
    {
        id: 146,
        nombre: "Air Jordan Jordan 6 Rings",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "146.webp",
        descripcion: "Negro / Rojo / Blanco (\"Bred\") - Upper mesh negro, base charol negro, suela blanca con acentos rojo, Jumpman rojo, caja Jordan negra"
    },
    {
        id: 147,
        nombre: "Air Jordan Jordan 12 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "147.webp",
        descripcion: "Negro / Blanco / Gris (\"Playoffs\") - Upper cuero negro, base blanca, herrajes plateados, Jumpman rojo, suela blanca"
    },
    {
        id: 148,
        nombre: "Air Jordan Jordan 11 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "148.webp",
        descripcion: "Blanco / Negro (\"Concord\") - Upper malla blanca, base charol negra, \"JORDAN\" en lateral translúcido, suela hielo azul, cámaras visibles"
    },
    {
        id: 149,
        nombre: "Nike Air Zoom Terra Kiger / Wildhorse",
        precio: "$250.000",
        marca: "Nike",
        imagen: "149.webp",
        descripcion: "Negro / Gris / Blanco - Trail, suela ZoomX, suela Vibram negra"
    },
    {
        id: 150,
        nombre: "Skechers Slip-ins Elite / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "150.webp",
        descripcion: "Blanco total / Negro (suela) - Running, \"CARBON INFUSED\", knit, logo S tonal"
    },
    {
        id: 151,
        nombre: "Skechers Slip-ins Elite / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "151.webp",
        descripcion: "Blanco / Suela multicolor (rosa, naranja, amarillo) - Running, \"CARBON INFUSED\", degradado arcoíris en suela"
    },
    {
        id: 152,
        nombre: "Skechers GO Run Arch Fit / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "152.webp",
        descripcion: "Blanco / Suela multicolor - Running, \"CARBON INFUSED\", \"AEROBURNER\", suela degradado"
    },
    {
        id: 153,
        nombre: "Skechers GO Run / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "153.webp",
        descripcion: "Azul marino / Lila / Menta - Running, \"CARBON INFUSED\", knit bicolor"
    },
    {
        id: 154,
        nombre: "Skechers GO Run / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "154.webp",
        descripcion: "Negro / Blanco - Running, \"CARBON INFUSED\", logo S blanco, suela blanca chunky"
    },
    {
        id: 155,
        nombre: "Converse Chuck Taylor All Star Hi",
        precio: "$250.000",
        marca: "Converse",
        imagen: "155.webp",
        descripcion: "Crema / Gris azul - Canvas crema, panel lateral gris, logo redondo azul traslúcido"
    },
    {
        id: 156,
        nombre: "Diesel S-Serendipity / S-Leroji",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "156.webp",
        descripcion: "Negro / Rojo (suela) - Runner retro, texto \"DIESEL\" lateral, suela roja"
    },
    {
        id: 157,
        nombre: "Nike P-6000",
        precio: "$250.000",
        marca: "Nike",
        imagen: "157.webp",
        descripcion: "Gris / Azul marino / Azul cielo - Retro running, paneles grises y marinos, swoosh tonal"
    },
    {
        id: 158,
        nombre: "Nike P-6000",
        precio: "$250.000",
        marca: "Nike",
        imagen: "158.webp",
        descripcion: "Blanco / Crema / Gum - Retro running, swoosh bordado negro, suela gum"
    },
    {
        id: 159,
        nombre: "Nike P-6000",
        precio: "$250.000",
        marca: "Nike",
        imagen: "159.webp",
        descripcion: "Blanco / Verde oliva / Kaki - Retro running, paneles oliva, detalles naranja en suela"
    },
    {
        id: 160,
        nombre: "Nike Vomero 5",
        precio: "$250.000",
        marca: "Nike",
        imagen: "160.webp",
        descripcion: "Beige / Azul marino / Marrón gum - Retro running, paneles azul marino, swoosh marrón"
    },
    {
        id: 161,
        nombre: "Nike Vomero 5",
        precio: "$250.000",
        marca: "Nike",
        imagen: "161.webp",
        descripcion: "Camel / Beige / Crema - Retro running, upper mesh camel, swoosh bordado negro, suela crema"
    },
    {
        id: 162,
        nombre: "Nike Air ZoomX / Zoom Running",
        precio: "$250.000",
        marca: "Nike",
        imagen: "162.webp",
        descripcion: "Azul marino / Blanco / Negro - Running casual, \"ZOOMX\" en suela, mesh marino"
    },
    {
        id: 163,
        nombre: "Nike Air ZoomX Running",
        precio: "$250.000",
        marca: "Nike",
        imagen: "163.webp",
        descripcion: "Verde oliva / Blanco / Negro - Running, \"ZOOMX\", suela blanca gruesa"
    },
    {
        id: 164,
        nombre: "Nike Air ZoomX Running",
        precio: "$250.000",
        marca: "Nike",
        imagen: "164.webp",
        descripcion: "Negro / Blanco - Running, \"ZOOMX\", suela blanca, swoosh blanco"
    },
    {
        id: 165,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "165.webp",
        descripcion: "Blanco / Azul acero / Negro - Cuero bicolor, swoosh doble (grande azul + mini negro)"
    },
    {
        id: 166,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "166.webp",
        descripcion: "Gris claro / Gris oscuro / Blanco - Cuero bicolor, suela gris oscura, etiqueta Nike"
    },
    {
        id: 167,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "167.webp",
        descripcion: "Negro / Blanco - Running, \"ZOOMX\", smiley face en lateral, suela blanca"
    },
    {
        id: 168,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "168.webp",
        descripcion: "Negro / Blanco - Running, \"ZOOMX\", swoosh blanco, pendiente Nike"
    },
    {
        id: 169,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "169.webp",
        descripcion: "Negro / Blanco - Running, \"NIKE ZOOMX\", smiley, fotografía on-feet"
    },
    {
        id: 170,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "170.webp",
        descripcion: "Negro / Blanco - Running, \"ZOOMX\", suela blanca chunky, versión ligeramente diferente"
    },
    {
        id: 171,
        nombre: "Adidas Predator Elite SG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "171.webp",
        descripcion: "Blanco / Plateado / Azul / Rojo - Fútbol, tachones SG, correa \"PREDATOR\", suela holográfica"
    },
    {
        id: 172,
        nombre: "Adidas Predator Elite SG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "172.webp",
        descripcion: "Negro / Blanco plateado / Menta - Fútbol, tachones SG, correa PREDATOR, suela menta"
    },
    {
        id: 173,
        nombre: "Nike Mercurial Vapor XV Elite SG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "173.webp",
        descripcion: "Marrón / Plateado / Verde neón - Fútbol, tachones SG, Flyknit marrón, suela verde neón"
    },
    {
        id: 174,
        nombre: "Adidas F50 Elite FG / X Crazyfast",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "174.webp",
        descripcion: "Blanco / Teal / Rojo / Amarillo - Fútbol, tachones FG, upper gráfico multicolor"
    },
    {
        id: 175,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "175.webp",
        descripcion: "Rojo / Blanco plateado / Negro - Fútbol, tachones FG, correa roja, suela roja holográfica"
    },
    {
        id: 176,
        nombre: "Nike Street Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "176.webp",
        descripcion: "Amarillo / Blanco / Gum - Fútbol sala, \"NIKE STREET GATO\", upper suede amarillo"
    },
    {
        id: 177,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "177.webp",
        descripcion: "Amarillo neón / Verde / Naranja - Fútbol, tachones FG, suela naranja traslúcida, talla 30-35"
    },
    {
        id: 178,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "178.webp",
        descripcion: "Plateado / Multicolor knit / Verde - Fútbol, tachones FG, suela traslúcida, talla 30-35"
    },
    {
        id: 179,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "179.webp",
        descripcion: "Blanco / Azul / Negro / Amarillo - Fútbol, tachones FG, suela azul traslúcida, talla 30-35"
    },
    {
        id: 180,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "180.webp",
        descripcion: "Negro / Verde neón - Fútbol, tachones FG, texto \"FC26\", suela verde"
    },
    {
        id: 181,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "181.webp",
        descripcion: "Blanco / Negro / Azul cielo / Amarillo - Fútbol, tachones FG, suela holográfica iridiscente"
    },
    {
        id: 182,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "182.webp",
        descripcion: "Blanco / Rojo / Negro - Fútbol, tachones FG, correa roja, suela holográfica roja"
    },
    {
        id: 183,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "183.webp",
        descripcion: "Blanco / Negro / Azul cielo - Fútbol, tachones FG, correa blanca, suela holográfica azul"
    },
    {
        id: 184,
        nombre: "Nike Phantom GX II Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "184.webp",
        descripcion: "Crema / Vino / Negro / Blanco - Fútbol, tachones FG, \"NIKE UNITED 002\", Flyknit, sin lengüeta"
    },
    {
        id: 185,
        nombre: "Nike Mercurial Superfly IX Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "185.webp",
        descripcion: "Blanco / Menta / Rosa / Rojo - Fútbol, tachones FG, collarín sock, suela roja"
    },
    {
        id: 186,
        nombre: "Nike Mercurial Superfly IX Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "186.webp",
        descripcion: "Rosa coral / Azul cielo / Plateado - Fútbol, tachones FG, collarín sock, \"TR\" lateral"
    },
    {
        id: 187,
        nombre: "Nike Mercurial Vapor XVI Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "187.webp",
        descripcion: "Lila / Amarillo neón - Fútbol, tachones FG, \"NIKE UNITED 001\", knit lila"
    },
    {
        id: 188,
        nombre: "Nike Mercurial Vapor XVI Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "188.webp",
        descripcion: "Rojo-naranja / Rosa / Azul cielo - Fútbol, tachones FG, knit degradado"
    },
    {
        id: 189,
        nombre: "Adidas X Crazyfast TF / Dembélé",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "189.webp",
        descripcion: "Azul marino / Dorado - Fútbol turf, edición Dembélé, gráficos dorados, talla normal"
    },
    {
        id: 190,
        nombre: "Nike Mercurial Vapor XV TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "190.webp",
        descripcion: "Plateado / Multicolor / Verde - Fútbol turf, talla 30-35"
    },
    {
        id: 191,
        nombre: "Adidas X Crazyfast / Messi TF",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "191.webp",
        descripcion: "Azul rey / Amarillo neón / Blanco - Fútbol turf, \"MESS\" en lateral, suela neón"
    },
    {
        id: 192,
        nombre: "Adidas F50 League TF",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "192.webp",
        descripcion: "Verde neón total / Negro - Fútbol turf, \"F.GO\" en lateral, suela verde neón"
    },
    {
        id: 193,
        nombre: "Nike Mercurial Superfly VI TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "193.webp",
        descripcion: "Naranja total / Dorado / Negro - Fútbol turf, collarín sock, suela naranja"
    },
    {
        id: 194,
        nombre: "Nike Mercurial Superfly IX Elite TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "194.webp",
        descripcion: "Lila / Gris / Rosa / Plateado - Fútbol turf, collarín sock, \"11\" en lateral"
    },
    {
        id: 195,
        nombre: "Nike Mercurial Superfly IX Elite TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "195.webp",
        descripcion: "Vino / Crema / Negro / Plateado - Fútbol turf, collarín sock, \"NIKE UNITED 003\", print leopardo"
    },
    {
        id: 196,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "196.webp",
        descripcion: "Negro / Verde neón / Blanco - Fútbol sala, \"HYPERFUSE\", \"LUNARLOX\", suela plana"
    },
    {
        id: 197,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "197.webp",
        descripcion: "Amarillo / Negro / Blanco - Fútbol sala, \"HYPERFUSE\", suela blanca lisa"
    },
    {
        id: 198,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "198.webp",
        descripcion: "Gris / Azul / Negro / Verde neón - Fútbol sala, \"LUNARLOX\", suela azul-verde bicolor, Flyknit multicolor"
    },
    {
        id: 199,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "199.webp",
        descripcion: "Amarillo neón / Negro / Blanco - Fútbol sala, \"HYPERFUSE\", rayas negras verticales, suela crema"
    },
    {
        id: 200,
        nombre: "Nike / Supreme SB Gato IC",
        precio: "$250.000",
        marca: "Nike / Supreme",
        imagen: "200.webp",
        descripcion: "Rojo / Naranja / Blanco / Gum - Fútbol sala, collab Supreme, paneles naranja a rayas, suela goma caramelo"
    },
    {
        id: 201,
        nombre: "Nike SB Gato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "201.webp",
        descripcion: "Azul rey / Amarillo - Fútbol sala, texto \"II GATO\", swoosh amarillo, suela naranja goma"
    },
    {
        id: 202,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "202.webp",
        descripcion: "Negro / Blanco / Amarillo - Fútbol sala, texto \"GATO\", swoosh blanco, suela amarilla"
    },
    {
        id: 203,
        nombre: "Nike SB Gato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "203.webp",
        descripcion: "Azul / Rojo / Marino / Blanco - Fútbol sala, texto \"II GATO\", upper azul con detalle rojo, suela goma"
    },
    {
        id: 204,
        nombre: "Nike / Supreme SB Gato IC",
        precio: "$250.000",
        marca: "Nike / Supreme",
        imagen: "204.webp",
        descripcion: "Negro / Rosa / Teal / Gum - Fútbol sala, collab Supreme, paneles rosa a rayas, suela gum caramelo"
    },
    {
        id: 205,
        nombre: "Fila Upgr8 / Regoletto",
        precio: "$250.000",
        marca: "Fila",
        imagen: "205.webp",
        descripcion: "Blanco / Gris / Azul marino / Menta - Chunky retro, suede y mesh, detalle muelle en talón, logo Fila"
    },
    {
        id: 206,
        nombre: "Fila Upgr8 / Regoletto",
        precio: "$250.000",
        marca: "Fila",
        imagen: "206.webp",
        descripcion: "Blanco / Gris claro / Azul marino / Menta - Misma silhouette, etiqueta precio en mano, suela azul marino"
    },
    {
        id: 207,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "207.webp",
        descripcion: "Negro total - Mesh y cuero negro, suela negra, unidades Air negras"
    },
    {
        id: 208,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "208.webp",
        descripcion: "Azul rey / Azul cielo / Blanco / Teal - Degradado azul, unidades Air teal traslúcido, suela blanca"
    },
    {
        id: 209,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "209.webp",
        descripcion: "Azul cielo / Lila / Blanco - Degradado lila a azul, suela blanca, unidades Air lila"
    },
    {
        id: 210,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "210.webp",
        descripcion: "Negro total / Plateado reflectante - Collab Foot Locker, etiqueta metálica, upper negro con costura plateada"
    },
    {
        id: 211,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "211.webp",
        descripcion: "Blanco / Rosa / Gris / Lila - Collab Foot Locker, etiqueta negra, unidades Air rosa-lila, suela blanca"
    },
    {
        id: 212,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "212.webp",
        descripcion: "Blanco / Rosa / Gris - Upper blanco-gris degradado, swoosh rosa, en caja Nike, unidades Air rosa"
    },
    {
        id: 213,
        nombre: "Adidas Terrex Free Hiker GTX",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "213.webp",
        descripcion: "Negro total / Gum - Trail/hike, Gore-Tex, tres rayas negras, suela Continental gum, par visto desde arriba"
    },
    {
        id: 214,
        nombre: "Nike / Jordan Kyrie 4",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "214.webp",
        descripcion: "Negro total / Multicolor suela - Basketball high, upper negro, suela con segmentos naranja/rojo/azul"
    },
    {
        id: 215,
        nombre: "Lacoste L003 Neo / Joggeur",
        precio: "$250.000",
        marca: "Lacoste",
        imagen: "215.webp",
        descripcion: "Blanco / Azul rey / Rojo / Plateado - Running retro, logo cocodrilo, mesh y cuero, \"LACOSTE\" lateral, suela cuadriculada"
    },
    {
        id: 216,
        nombre: "Puma California",
        precio: "$250.000",
        marca: "Puma",
        imagen: "216.webp",
        descripcion: "Crema / Azul marino - Suede y mesh perforado, franja navy, logo \"PUMA CALIFORNIA\", suela crema gum"
    },
    {
        id: 217,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "217.webp",
        descripcion: "Negro / Blanco - Running, swoosh blanco, suela blanca chunky con borde negro, logo copo nieve"
    },
    {
        id: 218,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "218.webp",
        descripcion: "Negro / Blanco / Rojo - Running, swoosh blanco, suela blanca con ribete rojo, logo copo nieve"
    },
    {
        id: 219,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "219.webp",
        descripcion: "Blanco / Negro / Gum dorado - Running, swoosh negro, suela crema con línea dorada gum, logo copo rojo"
    },
    {
        id: 220,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "220.webp",
        descripcion: "Negro / Gris / Plateado - Running, swoosh plateado metálico, suela gris, logo copo gris"
    },
    {
        id: 221,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "221.webp",
        descripcion: "Negro / Blanco - Running, swoosh blanco grande, suela blanca chunky, logo copo blanco"
    },
    {
        id: 222,
        nombre: "Skechers D'Lux Journey",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "222.webp",
        descripcion: "Gris / Azul marino / Crema / Neón amarillo - Chunky running, \"D'LUX JOURNEY\" en suela, costura amarilla en upper, suela crema moteada"
    },
    {
        id: 223,
        nombre: "Puma California",
        precio: "$250.000",
        marca: "Puma",
        imagen: "223.webp",
        descripcion: "Negro / Gris / Blanco / Rojo - Leather perforado, franja gris, etiqueta \"CALIFORNIA\" roja, suela blanca"
    },
    {
        id: 224,
        nombre: "Tommy Hilfiger / Tommy Jeans Cupsole Sneaker / Essential",
        precio: "$250.000",
        marca: "Tommy Hilfiger / Tommy Jeans",
        imagen: "224.webp",
        descripcion: "Blanco / Azul marino / Rojo - Cuero liso, franja tricolor (azul-rojo-blanco), contrafuerte navy, etiqueta Tommy Jeans"
    },
    {
        id: 225,
        nombre: "Tommy Hilfiger Essential Cupsole",
        precio: "$250.000",
        marca: "Tommy Hilfiger",
        imagen: "225.webp",
        descripcion: "Blanco total - Cuero liso monocromo, texto \"TOMMY HILFIGER\" lateral, línea roja+negra tonal"
    },
    {
        id: 226,
        nombre: "Tommy Hilfiger Essential Cupsole",
        precio: "$250.000",
        marca: "Tommy Hilfiger",
        imagen: "226.webp",
        descripcion: "Blanco / Negro - Cuero liso, monograma geométrico TH en upper, contrafuerte navy, etiqueta Tommy Hilfiger"
    },
    {
        id: 227,
        nombre: "Tommy Hilfiger Essential Cupsole",
        precio: "$250.000",
        marca: "Tommy Hilfiger",
        imagen: "227.webp",
        descripcion: "Blanco total - Cuero perforado, franja tricolor lateral vertical \"TOMMY HILFIGER\", presentación editorial"
    },
    {
        id: 228,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "228.webp",
        descripcion: "Negro / Wheat (camel) / Blanco - Bota media, nubuck negro, contrafuerte wheat, cordones negros con agujetas metálicas, logo árbol"
    },
    {
        id: 229,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "229.webp",
        descripcion: "Negro total - Nubuck negro, logo árbol plateado metálico, cordones negros con agujetas plateadas, suela blanca"
    },
    {
        id: 230,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "230.webp",
        descripcion: "Wheat / Azul marino - Nubuck camel clásico, logo árbol dorado, cordones bicolor amarillo-burdeo, agujetas doradas"
    },
    {
        id: 231,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "231.webp",
        descripcion: "Negro / Wheat / Blanco - Dos pares, vista superior, nubuck negro con talón wheat, cordones elásticos negros"
    },
    {
        id: 232,
        nombre: "New Balance 574 (Cordura)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "232.webp",
        descripcion: "Gris / Azul pizarra / Verde oliva / Blanco - Cordura fabric + suede, logo N blanco biselado, etiqueta Cordura, suela ENCAP crema"
    },
    {
        id: 233,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "233.webp",
        descripcion: "Crema / Azul marino / Gum rosa - Suede crema, logo N navy, suela gum rosado, foto on-feet"
    },
    {
        id: 234,
        nombre: "New Balance 574 (Cordura)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "234.webp",
        descripcion: "Kaki / Azul pizarra / Blanco - Dos pares, Cordura fabric, logo N gris y blanco, suela crema"
    },
    {
        id: 235,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "235.webp",
        descripcion: "Azul marino / Rojo / Gris / Gum - Suede navy, logo N rojo, suela ENCAP blanca, suela exterior gum, dos pares"
    },
    {
        id: 236,
        nombre: "Adidas Terrex Free Hiker GTX",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "236.webp",
        descripcion: "Negro total - Versión negro total, suela Continental con logotipo naranja, Gore-Tex"
    },
    {
        id: 237,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "237.webp",
        descripcion: "Negro / Gris / Naranja / Crema - Trail, \"NIKE TRAIL ATC\" en suela, Flywire, suela crema+naranja"
    },
    {
        id: 238,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "238.webp",
        descripcion: "Blanco / Gris / Negro / Gum - Trail, \"NIKE TRAIL ATC\" en suela, upper knit blanco, suela negra con gum, foto on-feet"
    },
    {
        id: 239,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "239.webp",
        descripcion: "Negro / Blanco / Lila / Verde oliva - Foto grupal varios colorways en tienda, Air Max 90 clásico en primer plano negro/blanco"
    },
    {
        id: 240,
        nombre: "Nike Free Metcon 6",
        precio: "$250.000",
        marca: "Nike",
        imagen: "240.webp",
        descripcion: "Negro / Blanco - Training, \"NIKE FREE METCON 6\", suela blanca acanalada, swoosh mini blanco"
    },
    {
        id: 241,
        nombre: "Nike Free Metcon 6",
        precio: "$250.000",
        marca: "Nike",
        imagen: "241.webp",
        descripcion: "Blanco total - Training, Flyknit sock-fit blanco, suela blanca acanalada, swoosh negro, foto on-feet"
    },
    {
        id: 242,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "242.webp",
        descripcion: "Blanco / Marino / Crema + (Teal/Blanco de fondo) - \"ZOOMX\" lateral, swoosh marino, suela crema; al fondo otro par teal"
    },
    {
        id: 243,
        nombre: "Nike ZoomX (Running)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "243.webp",
        descripcion: "Blanco / Turquesa - Suela ZoomX turquesa gruesa, swoosh azul marino, upper mesh blanco"
    },
    {
        id: 244,
        nombre: "Nike ZoomX (Running)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "244.webp",
        descripcion: "Blanco / Verde neón - Suela ZoomX verde neón, swoosh negro, upper mesh blanco con líneas amarillas"
    },
    {
        id: 245,
        nombre: "Adidas Campus 00s",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "245.webp",
        descripcion: "Negro / Blanco - Gamuza negra, 3 rayas blancas, suela gum beige, logo trefoil en lengüeta"
    },
    {
        id: 246,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "246.webp",
        descripcion: "Negro / Gris plata - Logo AX grande en lateral, upper mesh/gamuza negro, suela crema/negra"
    },
    {
        id: 247,
        nombre: "Skechers Max Protect",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "247.webp",
        descripcion: "Negro / Gris - Tecnología Max Protect + Goodyear, suela robusta gris moteada, cordones reflectivos"
    },
    {
        id: 248,
        nombre: "Skechers Max Protect Waterproof",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "248.webp",
        descripcion: "Azul marino / Gris - Igual al anterior pero azul navy, detalle \"Waterproof\" en lateral"
    },
    {
        id: 249,
        nombre: "Skechers Max Protect",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "249.webp",
        descripcion: "Verde oliva / Negro - Upper verde oliva + negro, suela negra, Goodyear en suela"
    },
    {
        id: 250,
        nombre: "Puma Palermo",
        precio: "$250.000",
        marca: "Puma",
        imagen: "250.webp",
        descripcion: "Blanco / Beige / Crema - Chunky retro, gamuza beige, forma PUMA en lateral, suela blanca"
    },
    {
        id: 251,
        nombre: "Puma Palermo",
        precio: "$250.000",
        marca: "Puma",
        imagen: "251.webp",
        descripcion: "Blanco / Negro / Crema - Top view, upper blanco con panel negro, logo PUMA en plantilla, suela crema"
    },
    {
        id: 252,
        nombre: "Skechers Go Run Elevate",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "252.webp",
        descripcion: "Negro / Rosa fucsia - Suela Go Run blanca con detalles fucsia, upper negro mesh, mujer"
    },
    {
        id: 253,
        nombre: "Skechers Go Run Elevate",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "253.webp",
        descripcion: "Blanco / Menta / Azul lavanda - Suela GoRun blanca con franja azul, detalles menta, mujer"
    },
    {
        id: 254,
        nombre: "Timberland 6-Inch Premium Boot",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "254.webp",
        descripcion: "Trigo / Negro - Bota clásica nubuck trigo, collarín negro, cordones marrón oscuro, suela rubber camel"
    },
    {
        id: 255,
        nombre: "Hugo Boss BOSS Runner",
        precio: "$250.000",
        marca: "Hugo Boss",
        imagen: "255.webp",
        descripcion: "Gris oscuro / Gris claro - Diseño jogger retro bicolor, logo BOSS en lateral, suela blanca, upper gamuza + nylon"
    },
    {
        id: 256,
        nombre: "Adidas Adizero",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "256.webp",
        descripcion: "Negro / Blanco - 3 rayas blancas anchas, upper mesh negro, suela Lightstrike blanca, perfil running"
    },
    {
        id: 257,
        nombre: "Adidas Pureboost / EQ21",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "257.webp",
        descripcion: "Negro / Gris plata - 3 barras plateadas en lateral, upper knit negro, suela blanca, talla marcada \"38\""
    },
    {
        id: 258,
        nombre: "Skechers ArchFit (Bobs)",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "258.webp",
        descripcion: "Negro total - Slip-on knit negro, logo S plateado, tecnología ArchFit en talón, suela negra"
    },
    {
        id: 259,
        nombre: "Skechers UltraLight Slip-On",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "259.webp",
        descripcion: "Negro total - Sin cordones, upper knit negro, suela UltraLight negra, pull tab trasero"
    },
    {
        id: 260,
        nombre: "Skechers Max Cushion",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "260.webp",
        descripcion: "Negro / Blanco - Logo S plateado, suela Max Cushion blanca muy gruesa, upper mesh negro"
    },
    {
        id: 261,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "261.webp",
        descripcion: "Negro / Naranja - Hombre, upper nylon negro liso, logo gallo negro, suela naranja contrastante"
    },
    {
        id: 262,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "262.webp",
        descripcion: "Rojo / Blanco - Hombre, upper rojo monocromático, panel trasero blanco, logo gallo rojo, suela blanca"
    },
    {
        id: 263,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "263.webp",
        descripcion: "Camel / Crema - Hombre, upper camel con gamuza, logo gallo crema, suela crema/gris"
    },
    {
        id: 264,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "264.webp",
        descripcion: "Negro / Salmon/Rosa - Dama, upper negro con detalles salmón en talón y logo, suela blanca"
    },
    {
        id: 265,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "265.webp",
        descripcion: "Rojo / Burdeos - Hombre, upper rojo con logo gallo burdeos, suela blanca/negra"
    },
    {
        id: 266,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "266.webp",
        descripcion: "Negro / Gris - Hombre, upper negro con panel central gris, logo gallo negro sobre gris, suela blanca"
    },
    {
        id: 267,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "267.webp",
        descripcion: "Negro / Gris - Retro runner, upper nylon gris oscuro + gamuza negra, franja lateral gris, suela blanca"
    },
    {
        id: 268,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "268.webp",
        descripcion: "Negro / Blanco dorado - Upper negro + gamuza, franja blanca, logo PUMA dorado, suela blanca"
    },
    {
        id: 269,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "269.webp",
        descripcion: "Gris / Blanco / Lila - Franja blanca, detalles lila en talón, logo PUMA dorado, suela blanca, mujer"
    },
    {
        id: 270,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "270.webp",
        descripcion: "Blanco / Azul cielo - Upper blanco + gamuza gris claro, franja azul cielo, logo PUMA dorado, suela blanca"
    },
    {
        id: 271,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "271.webp",
        descripcion: "Gris / Azul petróleo - Upper gamuza envejecida/washed, swoosh azul petróleo, suela azul, tag chino"
    },
    {
        id: 272,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "272.webp",
        descripcion: "Blanco / Salmón/Melocotón - Upper cuero blanco, swoosh y paneles melocotón, suela melocotón, mujer"
    },
    {
        id: 273,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "273.webp",
        descripcion: "Blanco / Azul universitario - Upper cuero blanco, swoosh y paneles azul UNC, suela azul, logo en lengüeta"
    },
    {
        id: 274,
        nombre: "On Running Cloudultra / Cloudsurfer",
        precio: "$250.000",
        marca: "On Running",
        imagen: "274.webp",
        descripcion: "Blanco menta / Gris / Naranja - Suela CloudTec perforada negra, detalles naranja y rojo bandera suiza, upper mesh"
    },
    {
        id: 275,
        nombre: "Adidas Grand Court",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "275.webp",
        descripcion: "Blanco / Negro - Clean court shoe, upper cuero blanco, talón negro, logo ADI perforado, suela blanca"
    },
    {
        id: 276,
        nombre: "Vans Lowland CC",
        precio: "$250.000",
        marca: "Vans",
        imagen: "276.webp",
        descripcion: "Azul marino / Gris / Salmón - Upper gamuza azul + gris, franja Vans crema, suela salmón/terrazo, cordones crema"
    },
    {
        id: 277,
        nombre: "New Balance 530",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "277.webp",
        descripcion: "Blanco / Plata / Azul - Upper mesh blanco, logo N plateado, código AB74RB en talón, suela blanca chunky retro"
    },
    {
        id: 278,
        nombre: "Adidas Yeezy Boost 350 V2",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "278.webp",
        descripcion: "Negro total (\"Onyx/Black\") - Knit Primeknit negro, franja negra lateral, cordones reflectivos, suela boost negra, detalle rojo en pull tab"
    },
    {
        id: 279,
        nombre: "Adidas Yeezy Boost 350 V2",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "279.webp",
        descripcion: "Blanco / Gris (\"Bone\") - Knit Primeknit blanco, franja gris semitransparente, suela Boost crema/amarillenta"
    },
    {
        id: 280,
        nombre: "Adidas Yeezy Boost 350 V2",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "280.webp",
        descripcion: "Gris bicolor (\"Static\") - Knit gris con patrón rayado, franja gris reflectiva, suela Boost crema"
    },
    {
        id: 281,
        nombre: "Hoka Speedgoat 5",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "281.webp",
        descripcion: "Gris camo / Oliva / Amarillo - Caballero, upper camo gris oscuro, logo HOKA amarillo en lateral, suela trail robusta amarilla"
    },
    {
        id: 282,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "282.webp",
        descripcion: "Azul grisáceo / Naranja - Caballero, upper mesh azul cielo, logo HOKA azul, franja naranja en suela, suela blanca"
    },
    {
        id: 283,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "283.webp",
        descripcion: "Negro / Blanco - Caballero, upper mesh negro, logo HOKA blanco grande, suela blanca muy gruesa"
    },
    {
        id: 284,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "284.webp",
        descripcion: "Gris / Blanco - Caballero, upper mesh gris uniforme, logo HOKA negro, suela blanca"
    },
    {
        id: 285,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "285.webp",
        descripcion: "Azul navy / Rojo / Amarillo - Caballero, upper azul oscuro, collarín rojo, logo HOKA amarillo, suela blanca con borde rojo"
    },
    {
        id: 286,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "286.webp",
        descripcion: "Verde oliva / Crema - Caballero, upper mesh verde menta/oliva, suela crema blanca gruesa"
    },
    {
        id: 287,
        nombre: "Hoka Speedgoat 5 Trail",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "287.webp",
        descripcion: "Negro / Blanco / Gris moteado - Caballero, upper negro con estampado splash blanco/gris, suela trail con lugs, logo rojo"
    },
    {
        id: 288,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "288.webp",
        descripcion: "Blanco / Gris / Azul / Lila - Upper blanco + gamuza gris, franja azul cielo en suela, collarín lila, logo gallo nacarado"
    },
    {
        id: 289,
        nombre: "Le Coq Sportif Racerone",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "289.webp",
        descripcion: "Negro / Lila - Dama, upper cuero/nylon negro liso, suela lila, \"le coq sportif\" en lateral blanco"
    },
    {
        id: 290,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "290.webp",
        descripcion: "Negro / Lila - Upper nylon negro, logo gallo blanco, franja lila en suela, suela blanca"
    },
    {
        id: 291,
        nombre: "Le Coq Sportif R500",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "291.webp",
        descripcion: "Rosa palo / Burdeos / Crema - Upper nylon rosa palo + gamuza crema, logo gallo en triángulo negro, suela blanca/negra"
    },
    {
        id: 292,
        nombre: "On Running Cloudtechase",
        precio: "$250.000",
        marca: "On Running",
        imagen: "292.webp",
        descripcion: "Negro / Gris / Blanco - Suela Cloudtec perforada blanca, upper negro + gris, logo On blanco, botón suizo rojo"
    },
    {
        id: 293,
        nombre: "On Running Cloudtechase",
        precio: "$250.000",
        marca: "On Running",
        imagen: "293.webp",
        descripcion: "Azul cielo / Gris oscuro / Naranja - Suela Cloudtec perforada blanca, upper bicolor azul + gris, pull tab naranja, bandera suiza"
    },
    {
        id: 294,
        nombre: "Adidas Response CL / Spiritain",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "294.webp",
        descripcion: "Blanco / Gris / Negro - Imagen IA, 3 barras negras 3D en lateral, upper blanco/gris, suela chunky blanca"
    },
    {
        id: 295,
        nombre: "Adidas Response CL / Spiritain",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "295.webp",
        descripcion: "Negro / Gris / Blanco - Imagen IA, misma silueta pero en negro, 3 barras 3D, suela blanca"
    },
    {
        id: 296,
        nombre: "Adidas Samba OG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "296.webp",
        descripcion: "Blanco / Rosa nude - Vista trasera, upper cuero blanco, 3 rayas rosa tenue/rejilla, suela crema"
    },
    {
        id: 297,
        nombre: "Adidas Superstar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "297.webp",
        descripcion: "Blanco / Verde - Upper cuero blanco, 3 rayas verdes, punta shell toe, caja azul Adidas Originals"
    },
    {
        id: 298,
        nombre: "Nike Air Max BW",
        precio: "$250.000",
        marca: "Nike",
        imagen: "298.webp",
        descripcion: "Gris / Azul cielo / Negro / Rojo - Unidad Air BW visible en talón, upper multicolor gris + azul, swoosh blanco, suela roja"
    },
    {
        id: 299,
        nombre: "Louis Vuitton LV Skate Sneaker",
        precio: "$250.000",
        marca: "Louis Vuitton",
        imagen: "299.webp",
        descripcion: "Blanco / Negro - Monograma LV floral cut-out negro en upper blanco, suela blanca con iconos LV"
    },
    {
        id: 300,
        nombre: "Puma Park Lifestyle",
        precio: "$250.000",
        marca: "Puma",
        imagen: "300.webp",
        descripcion: "Beige / Blanco / Gum - Logo puma de felino blanco en lateral beige, suela gum caramel, caja roja Puma"
    },
    {
        id: 301,
        nombre: "Nike SB Dunk Low × UNLA",
        precio: "$250.000",
        marca: "Nike",
        imagen: "301.webp",
        descripcion: "Verde menta / Gris / Azul navy - Collab UN/LA, upper ripstop verde menta + gris, swoosh serpiente gris, suela azul, parche amarillo \"UN/LA\""
    },
    {
        id: 302,
        nombre: "Nike SB Dunk Low × UNLA",
        precio: "$250.000",
        marca: "Nike",
        imagen: "302.webp",
        descripcion: "Verde menta / Gris / Azul - Misma collab, vista on-foot lateral, detalle logo skater en lateral, cordones blancos"
    },
    {
        id: 303,
        nombre: "On Running Cloudmonster",
        precio: "$250.000",
        marca: "On Running",
        imagen: "303.webp",
        descripcion: "Azul navy / Verde neón - Suela CloudTec verde neón enorme, \"CLOUDTEC\" en banda lateral blanca, upper mesh navy"
    },
    {
        id: 304,
        nombre: "Adidas Response 3.0 / Spiritain",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "304.webp",
        descripcion: "Negro total / Plata - Upper chunky negro todo, 3 barras plateadas, suela negra con burbujas, caja Adidas"
    },
    {
        id: 305,
        nombre: "On Running Cloudtechase",
        precio: "$250.000",
        marca: "On Running",
        imagen: "305.webp",
        descripcion: "Blanco total / Gum - Suela Cloudtec blanca con huecos, upper mesh blanco, logo \"on\" negro, suela gum"
    },
    {
        id: 306,
        nombre: "Nike Air Force 1 Low Custom",
        precio: "$250.000",
        marca: "Nike",
        imagen: "306.webp",
        descripcion: "Blanco / Floral japonés - Upper cuero blanco, swoosh con arte floral Yayoi Kusama/japonés, cordones blancos, imagen IA"
    },
    {
        id: 307,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "307.webp",
        descripcion: "Blanco / Swoosh outline rosa + menta - Upper cuero blanco, swoosh contorno bicolor (rosa en un pie, turquesa en el otro), medalla dorada"
    },
    {
        id: 308,
        nombre: "Nike × BAPE Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike × BAPE",
        imagen: "308.webp",
        descripcion: "Crema / Azul navy - Upper cuero crema, swoosh camo azul BAPE, mini swoosh azul, logo BAPE en lateral, suela azul"
    },
    {
        id: 309,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "309.webp",
        descripcion: "Blanco / Marrón chocolate - Upper gamuza/cuero blanco crema, swoosh marrón oscuro, \"NIKE AIR\" en talón, suela marrón"
    },
    {
        id: 310,
        nombre: "Diesel S-Serendipity",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "310.webp",
        descripcion: "Verde oliva / Gris / Negro / Naranja - \"For Successful Living\", upper verde oliva + gamuza gris, detalles naranja en agujetas, suela blanca"
    },
    {
        id: 311,
        nombre: "Diesel S-Serendipity",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "311.webp",
        descripcion: "Azul denim / Gris / Blanco - Tejido denim azul en upper, gamuza gris, logo DIESEL, suela blanca"
    },
    {
        id: 312,
        nombre: "Diesel S-Serendipity",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "312.webp",
        descripcion: "Negro total / Gum - Upper negro liso + gamuza, logo DIESEL, suela blanca con outsole gum caramel"
    },
    {
        id: 313,
        nombre: "Diesel S-Athos",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "313.webp",
        descripcion: "Gris / Negro - \"DIESEL 1978\" en lateral, upper gamuza gris + nylon, paneles negros, suela blanca"
    },
    {
        id: 314,
        nombre: "Diesel S-Athos",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "314.webp",
        descripcion: "Negro / Gum - \"DIESEL 1978\", upper negro gamuza + nylon, suela negra + gum caramel, caja negra"
    },
    {
        id: 315,
        nombre: "Adidas Samba OG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "315.webp",
        descripcion: "Blanco / Negro / Naranja - Suela naranja iridiscente, 3 barras negras, upper cuero/gamuza blanco, detalle corazón rosa"
    },
    {
        id: 316,
        nombre: "Adidas Drop Step",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "316.webp",
        descripcion: "Crema / Lila - \"DROP STEP\" en lateral, upper crema cuero, 3 rayas lila, suela crema con acentos lila"
    },
    {
        id: 317,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "317.webp",
        descripcion: "Blanco total / Gum - Upper cuero blanco, logo N blanco embossed, suela ENCAP blanca + gum caramel"
    },
    {
        id: 318,
        nombre: "Adidas Response / Terrex",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "318.webp",
        descripcion: "Gris claro / Verde neón - Upper mesh gris, 3 barras verde neón, suela blanca, logo Adidas verde neón en talón"
    },
    {
        id: 319,
        nombre: "Reebok GL 6000",
        precio: "$250.000",
        marca: "Reebok",
        imagen: "319.webp",
        descripcion: "Gris / Azul / Lila - Gamuza gris + mesh azul, detalles lila en collarín/suela, suela gum, \"GL 6000\" en lateral"
    },
    {
        id: 320,
        nombre: "Vans Knu-Skool",
        precio: "$250.000",
        marca: "Vans",
        imagen: "320.webp",
        descripcion: "Negro / Blanco - Upper canvas/gamuza negro, franja Vans blanca, suela chunky blanca gruesa"
    },
    {
        id: 321,
        nombre: "Vans Style 36",
        precio: "$250.000",
        marca: "Vans",
        imagen: "321.webp",
        descripcion: "Negro / Crema - Gamuza negra, franja Vans crema, suela crema envejecida, lengüeta \"Off The Wall\", caja roja"
    },
    {
        id: 322,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "322.webp",
        descripcion: "Blanco / Azul rey / Gris - Unidad Cushlon visible, upper mesh blanco + plástico azul real, swoosh azul, suela crema"
    },
    {
        id: 323,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "323.webp",
        descripcion: "Blanco / Negro (\"Panda\") - Flyer publicitario, upper cuero blanco, swoosh + paneles negro, suela blanca — NO es producto individual"
    },
    {
        id: 324,
        nombre: "Skechers Go Run Slip-In",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "324.webp",
        descripcion: "Negro / Blanco / Lila - Sin cordones, knit negro, logo S plateado, suela GoRun blanca con franja lila"
    },
    {
        id: 325,
        nombre: "Skechers Go Run Slip-In",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "325.webp",
        descripcion: "Gris / Blanco / Rosa - Sin cordones, knit gris, logo S rosado, suela GoRun blanca"
    },
    {
        id: 326,
        nombre: "Nike Air Max 90 × Cordura",
        precio: "$250.000",
        marca: "Nike",
        imagen: "326.webp",
        descripcion: "Verde oliva / Amarillo - Upper Cordura verde oliva, swoosh oliva, burbuja Air visible, detalles amarillo neón, caja en fondo"
    },
    {
        id: 327,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "327.webp",
        descripcion: "Negro / Gris / Turquesa - Upper mesh negro, swoosh gris, burbuja Air turquesa, logo turquesa en talón"
    },
    {
        id: 328,
        nombre: "Adidas Samba OG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "328.webp",
        descripcion: "Blanco / Negro / Gum - Upper cuero blanco, 3 rayas negras, \"SAMBA\" en lateral dorado, suela gum marrón oscuro"
    },
    {
        id: 329,
        nombre: "Skechers GoWalk Outdoor",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "329.webp",
        descripcion: "Café / Gris / Negro - Colección Outdoor, burbuja Air azul en talón, Goodyear en suela, Memory Foam, upper café + gris"
    },
    {
        id: 330,
        nombre: "Skechers GoWalk Outdoor",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "330.webp",
        descripcion: "Azul navy / Gris / Naranja - Misma colección Outdoor, burbuja Air naranja en talón, Goodyear, upper navy + gris"
    },
    {
        id: 331,
        nombre: "Skechers GoWalk Outdoor",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "331.webp",
        descripcion: "Negro / Gris - Colección Outdoor, burbuja Air gris en talón, Goodyear, upper negro + gris, suela negra"
    },
    {
        id: 332,
        nombre: "Skechers EdgeRide BOA",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "332.webp",
        descripcion: "Negro total - Sistema de cierre BOA (dial giratorio), tecnología EdgeRide, upper mesh negro, suela negra robusta"
    },
    {
        id: 333,
        nombre: "Skechers Distance Walker",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "333.webp",
        descripcion: "Negro / Gris - \"Water Repellent\", Goodyear en suela, upper negro + gris, suela trail gris gruesa, logo S en lateral"
    }
];