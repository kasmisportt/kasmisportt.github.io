const productos = [
    {
        id: 1,
        nombre: "Nike Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/1.jpg",
        descripcion: "Negro / Gris menta - Suela gruesa, detalles naranja, cordón elástico negro"
    },
    {
        id: 2,
        nombre: "Louis Vuitton LV Trainer",
        precio: "$250.000",
        marca: "Louis Vuitton",
        imagen: "img/2.jpg",
        descripcion: "Negro / Blanco - Monograma LV en suela y lateral, chunky"
    },
    {
        id: 3,
        nombre: "Converse Chuck Taylor All Star Hi (Alistar collab)",
        precio: "$250.000",
        marca: "Converse",
        imagen: "img/3.jpg",
        descripcion: "Blanco / Multicolor - Bordados mandalas, suela plataforma"
    },
    {
        id: 4,
        nombre: "Adidas Samba",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/4.jpg",
        descripcion: "Negro / Blanco - Tres rayas, suela goma negra"
    },
    {
        id: 5,
        nombre: "Reebok Classic Leather",
        precio: "$250.000",
        marca: "Reebok",
        imagen: "img/5.jpg",
        descripcion: "Beige / Marrón - Gamuza bicolor, logo UK"
    },
    {
        id: 6,
        nombre: "Reebok Classic Leather",
        precio: "$250.000",
        marca: "Reebok",
        imagen: "img/6.jpg",
        descripcion: "Azul marino / Azul cielo / Blanco - Gamuza bicolor, logo UK"
    },
    {
        id: 7,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/7.jpg",
        descripcion: "Negro, Blanco, Gris, Verde oliva, Rojo, Amarillo, Azul, Naranja, Teal (múltiples) - Foto grupal varios colorways"
    },
    {
        id: 8,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/8.jpg",
        descripcion: "Blanco / Negro / Gum - Suela goma caramelo, swoosh negro"
    },
    {
        id: 9,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/9.jpg",
        descripcion: "Blanco total - Script \"Young Forever\" lateral"
    },
    {
        id: 10,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/10.jpg",
        descripcion: "Verde oliva / Blanco - Slip-on, knit"
    },
    {
        id: 11,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/11.jpg",
        descripcion: "Negro / Blanco - Slip-on, knit"
    },
    {
        id: 12,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/12.jpg",
        descripcion: "Rojo / Blanco - Slip-on, knit"
    },
    {
        id: 13,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/13.jpg",
        descripcion: "Negro total - Slip-on, suela negra"
    },
    {
        id: 14,
        nombre: "Skechers Vapor Foam",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/14.jpg",
        descripcion: "Gris carbón / Blanco / Detalles neón amarillo - Slip-on, suela chunky"
    },
    {
        id: 15,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/15.jpg",
        descripcion: "Beige / Teal / Naranja - Lona cruda, detalle serpiente naranja"
    },
    {
        id: 16,
        nombre: "Le Coq Sportif Omega",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/16.jpg",
        descripcion: "Azul marino / Blanco / Gris - Suede bicolor, logo gallo"
    },
    {
        id: 17,
        nombre: "Le Coq Sportif Omega",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/17.jpg",
        descripcion: "Negro / Rojo (suela) - Logo gallo negro, suela roja"
    },
    {
        id: 18,
        nombre: "Le Coq Sportif Omega",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/18.jpg",
        descripcion: "Gris / Azul marino / Marrón - Tejido mixto, etiqueta colgante"
    },
    {
        id: 19,
        nombre: "Nike / Jordan Air Jordan 1 Mid",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/19.jpg",
        descripcion: "Negro charol / Blanco / Hielo - Cuero charolado"
    },
    {
        id: 20,
        nombre: "Nike / Jordan Air Jordan 1 Mid",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/20.jpg",
        descripcion: "Rosa / Uva / Crema / Gum - Cuero multicolor, swoosh vino"
    },
    {
        id: 21,
        nombre: "Nike / Jordan Air Jordan 1 Mid",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/21.jpg",
        descripcion: "Beige / Negro - Cuero bicolor, cordones crema"
    },
    {
        id: 22,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/22.jpg",
        descripcion: "Negro / Blanco - Running, rayas reflectantes"
    },
    {
        id: 23,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/23.jpg",
        descripcion: "Blanco / Azul marino / Rosa - Running, detalles fucsia"
    },
    {
        id: 24,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/24.jpg",
        descripcion: "Negro / Blanco - Running, rayas sólidas"
    },
    {
        id: 25,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/25.jpg",
        descripcion: "Blanco / Negro / Rosa - Running, detalles fucsia"
    },
    {
        id: 26,
        nombre: "Converse Chuck Taylor All Star Lift Hi",
        precio: "$250.000",
        marca: "Converse",
        imagen: "img/26.jpg",
        descripcion: "Crema / Bordados florales multicolor - Plataforma alta, flores bordadas"
    },
    {
        id: 27,
        nombre: "Converse Chuck Taylor All Star Lift Hi",
        precio: "$250.000",
        marca: "Converse",
        imagen: "img/27.jpg",
        descripcion: "Negro / Bordados naturaleza multicolor - Plataforma, luna, sol, hojas bordadas"
    },
    {
        id: 28,
        nombre: "Nike Air Max BW",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/28.jpg",
        descripcion: "Blanco / Gris / Azul / Rojo coral - Unidad Air visible, suela roja"
    },
    {
        id: 29,
        nombre: "Nike Shox TL",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/29.jpg",
        descripcion: "Negro total - Columnas Shox negras"
    },
    {
        id: 30,
        nombre: "Sin nombre",
        precio: "$250.000",
        marca: "—",
        imagen: "img/30.jpg",
        descripcion: "31"
    },
    {
        id: 31,
        nombre: "Sin nombre",
        precio: "$250.000",
        marca: "—",
        imagen: "img/31.jpg",
        descripcion: "33"
    },
    {
        id: 32,
        nombre: "Sin nombre",
        precio: "$250.000",
        marca: "—",
        imagen: "img/32.jpg",
        descripcion: "35"
    },
    {
        id: 33,
        nombre: "Puma California",
        precio: "$250.000",
        marca: "Puma",
        imagen: "img/33.jpg",
        descripcion: "Kaki / Blanco - Suede perforado, logo California"
    },
    {
        id: 34,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/34.jpg",
        descripcion: "Blanco / Vino / Crema - Leather, cordones rojo + beige, detalles dorados"
    },
    {
        id: 35,
        nombre: "On Running Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/35.jpg",
        descripcion: "Negro total - Suela CloudTec"
    },
    {
        id: 36,
        nombre: "On Running Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/36.jpg",
        descripcion: "Beige rosado / Negro / Blanco - Knit bicolor"
    },
    {
        id: 37,
        nombre: "On Running Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/37.jpg",
        descripcion: "Gris total - Monotono"
    },
    {
        id: 38,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/38.jpg",
        descripcion: "Beige / Negro / Blanco - Sin cordones, sock fit"
    },
    {
        id: 39,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/39.jpg",
        descripcion: "Negro / Gris - Sin cordones"
    },
    {
        id: 40,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/40.jpg",
        descripcion: "Lila / Blanco - Tono lila pálido"
    },
    {
        id: 41,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/41.jpg",
        descripcion: "Negro total - Sin cordones, chunky"
    },
    {
        id: 42,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/42.jpg",
        descripcion: "Negro total / Detalle verde neón - Hologram verde, basketball high"
    },
    {
        id: 43,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/43.jpg",
        descripcion: "Negro / Gris / Azul holográfico - Lateral charolado con rosas en relieve"
    },
    {
        id: 44,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/44.jpg",
        descripcion: "Azul marino / Blanco / Gris - Hologram verde, panel punteado"
    },
    {
        id: 45,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/45.jpg",
        descripcion: "Blanco / Gris / Rojo - Hologram gris, suela roja"
    },
    {
        id: 46,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/46.jpg",
        descripcion: "Negro / Rojo - \"Bred\" colorway, hologram gris"
    },
    {
        id: 47,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/47.jpg",
        descripcion: "Negro / Blanco / Gris / Rojo - Panel punteado, hologram plateado"
    },
    {
        id: 48,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/48.jpg",
        descripcion: "Blanco / Rojo / Negro - \"Chicago\" colorway, hologram verde"
    },
    {
        id: 49,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/49.jpg",
        descripcion: "Blanco / Mostaza / Gum - Hologram verde, suela goma"
    },
    {
        id: 50,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/50.jpg",
        descripcion: "Gris suede / Blanco - Cuero suede monocromático, swoosh tonal"
    },
    {
        id: 51,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/51.jpg",
        descripcion: "Crema / Azul gris - Collab The North Face, etiqueta colgante"
    },
    {
        id: 52,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/52.jpg",
        descripcion: "Verde oliva / Blanco - Leather bicolor clásico"
    },
    {
        id: 53,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/53.jpg",
        descripcion: "Rosa / Blanco / Gris - Suede, logo N blanco"
    },
    {
        id: 54,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/54.jpg",
        descripcion: "Blanco / Rosa - Suede, logo N rosado, suela ENCAP"
    },
    {
        id: 55,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/55.jpg",
        descripcion: "Blanco / Salmón - Suede, logo N salmón"
    },
    {
        id: 56,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/56.jpg",
        descripcion: "Gris / Azul marino / Blanco - Suede, logo N navy"
    },
    {
        id: 57,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/57.jpg",
        descripcion: "Crema / Rosa / Blanco - Suede, suela con speckle rosado"
    },
    {
        id: 58,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/58.jpg",
        descripcion: "Blanco total / Gum - Cuero liso, logo N tonal"
    },
    {
        id: 59,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/59.jpg",
        descripcion: "Crema / Azul cielo / Negro - Suede bicolor"
    },
    {
        id: 60,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/60.jpg",
        descripcion: "Gris / Azul marino / Kaki - Suede, logo N navy"
    },
    {
        id: 61,
        nombre: "New Balance 9060",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/61.jpg",
        descripcion: "Gris total / Plateado - Chunky, suede y mesh"
    },
    {
        id: 62,
        nombre: "Nike V2K Run / Zoom Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/62.jpg",
        descripcion: "Blanco / Crema / Gris - Running retro chunky"
    },
    {
        id: 63,
        nombre: "Nike V2K Run / Zoom Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/63.jpg",
        descripcion: "Blanco / Gris / Swoosh negro - Running retro, etiqueta naranja corazón"
    },
    {
        id: 64,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/64.jpg",
        descripcion: "Morado / Lila / Rosa / Blanco - Trail running, suela chunky"
    },
    {
        id: 65,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/65.jpg",
        descripcion: "Rosa / Blanco - Trail running, suela rosa"
    },
    {
        id: 66,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/66.jpg",
        descripcion: "Negro / Blanco - Trail running, suela blanca"
    },
    {
        id: 67,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/67.jpg",
        descripcion: "Blanco total - Trail running, suela blanca"
    },
    {
        id: 68,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/68.jpg",
        descripcion: "Negro / Blanco - Running, LightstrikePro"
    },
    {
        id: 69,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/69.jpg",
        descripcion: "Blanco / Gris / Rojo coral - Running, LightstrikePro"
    },
    {
        id: 70,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/70.jpg",
        descripcion: "Gris oscuro / Negro / Naranja - Running, LightstrikePro"
    },
    {
        id: 71,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/71.jpg",
        descripcion: "Negro total / Gris iridiscente - Running, LightstrikePro"
    },
    {
        id: 72,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/72.jpg",
        descripcion: "Blanco / Negro / Naranja - Running, LightstrikePro"
    },
    {
        id: 73,
        nombre: "Nike Air Max BW",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/73.jpg",
        descripcion: "Blanco / Gris / Azul / Rojo coral - Unidad Air visible"
    },
    {
        id: 74,
        nombre: "New Balance 574 (estilo nuevo)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/74.jpg",
        descripcion: "Gris / Azul marino / Gum - Suela gum, logo N navy"
    },
    {
        id: 75,
        nombre: "New Balance 574 (estilo nuevo)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/75.jpg",
        descripcion: "Negro / Blanco - Cuero y mesh"
    },
    {
        id: 76,
        nombre: "Dolce & Gabbana NS1 Sneaker",
        precio: "$250.000",
        marca: "Dolce & Gabbana",
        imagen: "img/76.jpg",
        descripcion: "Negro total - Bandas D&G, suela con logo DG"
    },
    {
        id: 77,
        nombre: "Dolce & Gabbana NS1 Sneaker",
        precio: "$250.000",
        marca: "Dolce & Gabbana",
        imagen: "img/77.jpg",
        descripcion: "Blanco total - Bandas D&G, suela con logo DG"
    },
    {
        id: 78,
        nombre: "Dolce & Gabbana NS1 Sneaker",
        precio: "$250.000",
        marca: "Dolce & Gabbana",
        imagen: "img/78.jpg",
        descripcion: "Negro / Rojo / Gris / Blanco - Multicolor, bandas D&G"
    },
    {
        id: 79,
        nombre: "New Balance 990v6",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/79.jpg",
        descripcion: "Gris / Beige / Blanco - Made in USA, suela clásica"
    },
    {
        id: 80,
        nombre: "New Balance 57/40",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/80.jpg",
        descripcion: "Gris / Azul pizarra / Blanco - Chunky retro"
    },
    {
        id: 81,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/81.jpg",
        descripcion: "Blanco / Gris / Crema / Negro - Running retro chunky, CushTec"
    },
    {
        id: 82,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/82.jpg",
        descripcion: "Blanco / Rosa / Azul marino - CushTec, chunky femenino"
    },
    {
        id: 83,
        nombre: "Nike V2K Run / Zoom Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/83.jpg",
        descripcion: "Blanco / Plateado / Lila - CushTec, chunky"
    },
    {
        id: 84,
        nombre: "Nike Air Max 90 (collab)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/84.jpg",
        descripcion: "Negro / Blanco / Charol - \"Los Técnicos\" edición especial"
    },
    {
        id: 85,
        nombre: "Nike Air Zoom Pegasus",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/85.jpg",
        descripcion: "Negro / Blanco - Air Zoom, running"
    },
    {
        id: 86,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/86.jpg",
        descripcion: "Blanco / Rosa / Azul marino - CushTec"
    },
    {
        id: 87,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/87.jpg",
        descripcion: "Plateado / Lila / Blanco - CushTec metalizado"
    },
    {
        id: 88,
        nombre: "Nike Air Zoom Pegasus 41 XL",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/88.jpg",
        descripcion: "Crema / Dorado / Gum - Air Zoom, swoosh dorado"
    },
    {
        id: 89,
        nombre: "Nike Pegasus Trail / Wild Horse",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/89.jpg",
        descripcion: "Blanco / Crema / Vino / Teal - Trail running"
    },
    {
        id: 90,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/90.jpg",
        descripcion: "Negro total - Unidad Air, suela negra"
    },
    {
        id: 91,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/91.jpg",
        descripcion: "Crema / Gris / Marrón gum - Chunky retro, swoosh plateado tonal, detalles cuero marrón"
    },
    {
        id: 92,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/92.jpg",
        descripcion: "Rojo total - Leather y mesh, unidad Air visible, suela roja (\"Red October\")"
    },
    {
        id: 93,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/93.jpg",
        descripcion: "Negro / Blanco - Chunky retro, swoosh blanco metálico, suela blanca"
    },
    {
        id: 94,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/94.jpg",
        descripcion: "Blanco total - Cuero y mesh, unidad Air visible, suela blanca"
    },
    {
        id: 95,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/95.jpg",
        descripcion: "Azul rey / Amarillo / Blanco gum - Fútbol sala, texto \"II GATO\", suela goma caramelo"
    },
    {
        id: 96,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/96.jpg",
        descripcion: "Negro / Amarillo / Rojo - Fútbol sala, texto \"GATO\", swoosh amarillo con borde rojo"
    },
    {
        id: 97,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/97.jpg",
        descripcion: "Rojo / Blanco / Negro - Fútbol sala, texto \"GATO\", suela traslúcida con patrón cuadros"
    },
    {
        id: 98,
        nombre: "Nike / Supreme SB Gato IC",
        precio: "$250.000",
        marca: "Nike / Supreme",
        imagen: "img/98.jpg",
        descripcion: "Negro / Blanco / Rosa - Fútbol sala, collab Supreme, paneles laterales rosa rayado"
    },
    {
        id: 99,
        nombre: "Adidas Climacool / Ozweego",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/99.jpg",
        descripcion: "Blanco / Rosa / Menta / Azul - Suela chunky transparente multicolor, upper knit, logo trébol azul"
    },
    {
        id: 100,
        nombre: "Nike / Levi's Air Max 95",
        precio: "$250.000",
        marca: "Nike / Levi's",
        imagen: "img/100.jpg",
        descripcion: "Gris denim / Negro - Collab Levi's, upper en tela denim azul grisáceo, etiqueta Levi's"
    },
    {
        id: 101,
        nombre: "Nike / BAPE Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike / BAPE",
        imagen: "img/101.jpg",
        descripcion: "Crema / Verde oliva / Camo - Collab A Bathing Ape, swoosh camo, logo mono BAPE en lateral"
    },
    {
        id: 102,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/102.jpg",
        descripcion: "Blanco / Verde oliva - Bordado \"face\" en lateral, swoosh verde oliva, suela oliva"
    },
    {
        id: 103,
        nombre: "Nike Air Zoom Terra Kiger / Wildhorse",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/103.jpg",
        descripcion: "Blanco / Negro / Rosa neón - Trail running, suela Vibram rosa neón, upper knit perforado"
    },
    {
        id: 104,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "img/104.jpg",
        descripcion: "Negro total / Gum - Suede y mesh, logo AX grande, suela goma caramelo"
    },
    {
        id: 105,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "img/105.jpg",
        descripcion: "Gris / Verde oliva / Blanco - Suede y mesh, logo AX blanco"
    },
    {
        id: 106,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "img/106.jpg",
        descripcion: "Blanco / Crema / Gum - Suede y mesh monótono, logo AX tonal, suela gum"
    },
    {
        id: 107,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "img/107.jpg",
        descripcion: "Vino / Blanco / Gum - Suede y mesh, logo AX blanco, suela gum crema"
    },
    {
        id: 108,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "img/108.jpg",
        descripcion: "Beige / Blanco / Marino - Suede y mesh, logo AX blanco, suela blanca"
    },
    {
        id: 109,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "img/109.jpg",
        descripcion: "Negro / Blanco - Suede y mesh, logo AX blanco grande, suela negra"
    },
    {
        id: 110,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "img/110.jpg",
        descripcion: "Azul marino / Blanco - Suede y mesh, logo AX blanco, suela marino"
    },
    {
        id: 111,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "img/111.jpg",
        descripcion: "Negro / Blanco - Suede liso, logo AX blanco, suela blanca (estilo diferente al 112)"
    },
    {
        id: 112,
        nombre: "Nike Air Zoom Pegasus 37/38",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/112.jpg",
        descripcion: "Salmón / Negro / Magenta - Running, Air Zoom full-length, texto \"Pegasus\" en lengüeta"
    },
    {
        id: 113,
        nombre: "Nike Air Monarch IV",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/113.jpg",
        descripcion: "Blanco / Azul marino - Cuero liso, swoosh marino outline, texto \"AIR MONARCH\""
    },
    {
        id: 114,
        nombre: "Nike Air Monarch IV",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/114.jpg",
        descripcion: "Blanco / Gris / Naranja - Cuero liso, swoosh gris, detalle naranja en suela lateral"
    },
    {
        id: 115,
        nombre: "Le Coq Sportif Veloce / Runner",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/115.jpg",
        descripcion: "Negro total / Rojo (suela) - Logo gallo metálico, upper nylon, suela roja"
    },
    {
        id: 116,
        nombre: "Nike / Jordan Air Jordan 3 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/116.jpg",
        descripcion: "Blanco total / Crema - \"Pure White\", paneles elefante crema, suela blanca"
    },
    {
        id: 117,
        nombre: "Nike / Jordan Air Jordan 3 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/117.jpg",
        descripcion: "Negro / Gris / Blanco - \"Black Cement\", paneles elefante gris, suela blanca, dos pares en foto"
    },
    {
        id: 118,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/118.jpg",
        descripcion: "Negro / Gris cemento (\"Black Cement\") - Upper gamuza negra, panel cemento gris, suela blanca, burbuja Air, caja Jordan negra + tag AIR"
    },
    {
        id: 119,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/119.jpg",
        descripcion: "Verde esmeralda / Crema / Naranja - Upper gamuza verde, \"NIKE AIR\" en talón, detalles naranja, suela crema/beige"
    },
    {
        id: 120,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/120.jpg",
        descripcion: "Negro / Azul rey / Gris - Upper negro, panel azul en talón, burbuja Air, caja Jordan \"Flight\", cordones negros"
    },
    {
        id: 121,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/121.jpg",
        descripcion: "Blanco / Azul universitario - Upper cuero blanco, acentos azul UNC, burbuja Air crema, tag AIR rojo, detalles \"OG\""
    },
    {
        id: 122,
        nombre: "Air Jordan Jordan 3 × Fragment Design",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/122.jpg",
        descripcion: "Blanco / Negro - Collab Fragment, upper cuero blanco texturizado, panel negro en base, \"fragment\" en talón, caja roja"
    },
    {
        id: 123,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/123.jpg",
        descripcion: "Crema / Camel / Negro / Naranja - Upper nubuck camel/crema, panel cemento negro, ojales amarillos, suela blanca"
    },
    {
        id: 124,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/124.jpg",
        descripcion: "Blanco / Rosa dusty - Upper cuero blanco, panel gamuza rosa viejo con floral grabado, suela gris, mujer"
    },
    {
        id: 125,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/125.jpg",
        descripcion: "Blanco / Azul cielo / Rosa - Upper cuero blanco, panel crema azul cielo, detalles rosa, Jumpman rosa, suela azul hielo"
    },
    {
        id: 126,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/126.jpg",
        descripcion: "Rosa melocotón / Crema / Burdeos - Upper satén rosa melocotón, panel cemento burdeos, Jumpman rojo, cordones rosas, mujer"
    },
    {
        id: 127,
        nombre: "Nike Invincible Run 3",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/127.jpg",
        descripcion: "Gris / Azul navy / Menta - Upper knit gris speckle, \"INVINCIBLE RUN 3\" en talón, suela crema/amarillenta gruesa, tira menta"
    },
    {
        id: 128,
        nombre: "Nike Invincible Run 3",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/128.jpg",
        descripcion: "Blanco crema / Azul navy - Upper knit blanco texturizado, swoosh tonal crema, suela crema, outsole navy"
    },
    {
        id: 129,
        nombre: "Nike ZoomX Invincible Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/129.jpg",
        descripcion: "Azul cielo / Azul petróleo - \"ZOOMX\" en lateral, upper knit azul speckle, suela crema robusta, outsole azul petróleo"
    },
    {
        id: 130,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/130.jpg",
        descripcion: "Negro total - Suela TN con cámaras de aire negras, upper negro con swoosh tonal, paneles negros laqueados"
    },
    {
        id: 131,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/131.jpg",
        descripcion: "Negro / Rojo - \"ADISTAR\" + \"REPETITOR\" en suela, upper mesh negro, 3 barras negras, outsole roja, tag verde"
    },
    {
        id: 132,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/132.jpg",
        descripcion: "Negro / Blanco / Verde neón - Upper mesh negro, 3 barras blancas, suela blanca \"REPETITOR\", outsole verde neón, tag verde"
    },
    {
        id: 133,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/133.jpg",
        descripcion: "Negro / Blanco - Upper mesh negro, 3 barras negras tonal, suela blanca \"REPETITOR\", perfil running limpio"
    },
    {
        id: 134,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/134.jpg",
        descripcion: "Negro total - Upper mesh negro, 3 barras tonal oscuro, suela \"REPETITOR\" negra, outsole negra"
    },
    {
        id: 135,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/135.jpg",
        descripcion: "Negro / Blanco / Rojo - Upper mesh negro, 3 barras negras, suela blanca \"REPETITOR\", outsole roja en talón"
    },
    {
        id: 136,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/136.jpg",
        descripcion: "Negro / Blanco - Upper mesh negro, 3 barras blancas anchas, suela \"REPETITOR\" blanca, outsole blanca"
    },
    {
        id: 137,
        nombre: "Diesel S-Tyche",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "img/137.jpg",
        descripcion: "Negro / Azul / Rojo / Blanco - \"DIESEL DIESEL\" en lateral, logo D blanco, panel azul en talón, detalles rojo en suela, upper nylon"
    },
    {
        id: 138,
        nombre: "Diesel S-Tyche",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "img/138.jpg",
        descripcion: "Negro / Blanco - \"DIESEL DIESEL\" + \"FOR SUCCESSFUL LIVING\", upper nylon/gamuza negro, logo D reflectivo, suela blanca"
    },
    {
        id: 139,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/139.jpg",
        descripcion: "Blanco / Azul navy - Upper cuero blanco, mini swoosh navy, collarín navy canvas, \"AIR\" en suela, suela navy"
    },
    {
        id: 140,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/140.jpg",
        descripcion: "Blanco / Negro / Café (Mocha) - Upper cuero blanco, swoosh negro, panel gamuza café mocha en talón, suela crema envejecida"
    },
    {
        id: 141,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/141.jpg",
        descripcion: "Crema / Verde teal / Naranja - Upper canvas burlap crema, swoosh teal tejido, suela verde, detalles naranja y turquesa, manchas paint"
    },
    {
        id: 142,
        nombre: "Adidas Handball Spezial",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/142.jpg",
        descripcion: "Rojo / Blanco / Gum - \"SPEZIAL\" dorado en lateral, gamuza roja, 3 rayas blancas, suela gum translúcida"
    },
    {
        id: 143,
        nombre: "Adidas Pureboost / RunFalcon",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/143.jpg",
        descripcion: "Blanco / Turquesa - Upper knit/mesh blanco, 3 barras turquesa, suela blanca running, logo Adidas azul"
    },
    {
        id: 144,
        nombre: "Adidas Pureboost / RunFalcon",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/144.jpg",
        descripcion: "Blanco / Azul rey / Rojo - Upper mesh blanco, 3 barras azul rey, collarín azul, detalles rojos en outsole, suela blanca"
    },
    {
        id: 145,
        nombre: "Air Jordan Jordan 12 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/145.jpg",
        descripcion: "Negro / Dorado (\"Royalty\") - Upper nubuck negro, herrajes dorados, Jumpman dorado, suela negra, numeración dorada en lateral"
    },
    {
        id: 146,
        nombre: "Air Jordan Jordan 6 Rings",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/146.jpg",
        descripcion: "Negro / Rojo / Blanco (\"Bred\") - Upper mesh negro, base charol negro, suela blanca con acentos rojo, Jumpman rojo, caja Jordan negra"
    },
    {
        id: 147,
        nombre: "Air Jordan Jordan 12 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/147.jpg",
        descripcion: "Negro / Blanco / Gris (\"Playoffs\") - Upper cuero negro, base blanca, herrajes plateados, Jumpman rojo, suela blanca"
    },
    {
        id: 148,
        nombre: "Air Jordan Jordan 11 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "img/148.jpg",
        descripcion: "Blanco / Negro (\"Concord\") - Upper malla blanca, base charol negra, \"JORDAN\" en lateral translúcido, suela hielo azul, cámaras visibles"
    },
    {
        id: 149,
        nombre: "Nike Air Zoom Terra Kiger / Wildhorse",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/149.jpg",
        descripcion: "Negro / Gris / Blanco - Trail, suela ZoomX, suela Vibram negra"
    },
    {
        id: 150,
        nombre: "Skechers Slip-ins Elite / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/150.jpg",
        descripcion: "Blanco total / Negro (suela) - Running, \"CARBON INFUSED\", knit, logo S tonal"
    },
    {
        id: 151,
        nombre: "Skechers Slip-ins Elite / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/151.jpg",
        descripcion: "Blanco / Suela multicolor (rosa, naranja, amarillo) - Running, \"CARBON INFUSED\", degradado arcoíris en suela"
    },
    {
        id: 152,
        nombre: "Skechers GO Run Arch Fit / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/152.jpg",
        descripcion: "Blanco / Suela multicolor - Running, \"CARBON INFUSED\", \"AEROBURNER\", suela degradado"
    },
    {
        id: 153,
        nombre: "Skechers GO Run / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/153.jpg",
        descripcion: "Azul marino / Lila / Menta - Running, \"CARBON INFUSED\", knit bicolor"
    },
    {
        id: 154,
        nombre: "Skechers GO Run / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/154.jpg",
        descripcion: "Negro / Blanco - Running, \"CARBON INFUSED\", logo S blanco, suela blanca chunky"
    },
    {
        id: 155,
        nombre: "Converse Chuck Taylor All Star Hi",
        precio: "$250.000",
        marca: "Converse",
        imagen: "img/155.jpg",
        descripcion: "Crema / Gris azul - Canvas crema, panel lateral gris, logo redondo azul traslúcido"
    },
    {
        id: 156,
        nombre: "Diesel S-Serendipity / S-Leroji",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "img/156.jpg",
        descripcion: "Negro / Rojo (suela) - Runner retro, texto \"DIESEL\" lateral, suela roja"
    },
    {
        id: 157,
        nombre: "Nike P-6000",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/157.jpg",
        descripcion: "Gris / Azul marino / Azul cielo - Retro running, paneles grises y marinos, swoosh tonal"
    },
    {
        id: 158,
        nombre: "Nike P-6000",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/158.jpg",
        descripcion: "Blanco / Crema / Gum - Retro running, swoosh bordado negro, suela gum"
    },
    {
        id: 159,
        nombre: "Nike P-6000",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/159.jpg",
        descripcion: "Blanco / Verde oliva / Kaki - Retro running, paneles oliva, detalles naranja en suela"
    },
    {
        id: 160,
        nombre: "Nike Vomero 5",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/160.jpg",
        descripcion: "Beige / Azul marino / Marrón gum - Retro running, paneles azul marino, swoosh marrón"
    },
    {
        id: 161,
        nombre: "Nike Vomero 5",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/161.jpg",
        descripcion: "Camel / Beige / Crema - Retro running, upper mesh camel, swoosh bordado negro, suela crema"
    },
    {
        id: 162,
        nombre: "Nike Air ZoomX / Zoom Running",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/162.jpg",
        descripcion: "Azul marino / Blanco / Negro - Running casual, \"ZOOMX\" en suela, mesh marino"
    },
    {
        id: 163,
        nombre: "Nike Air ZoomX Running",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/163.jpg",
        descripcion: "Verde oliva / Blanco / Negro - Running, \"ZOOMX\", suela blanca gruesa"
    },
    {
        id: 164,
        nombre: "Nike Air ZoomX Running",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/164.jpg",
        descripcion: "Negro / Blanco - Running, \"ZOOMX\", suela blanca, swoosh blanco"
    },
    {
        id: 165,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/165.jpg",
        descripcion: "Blanco / Azul acero / Negro - Cuero bicolor, swoosh doble (grande azul + mini negro)"
    },
    {
        id: 166,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/166.jpg",
        descripcion: "Gris claro / Gris oscuro / Blanco - Cuero bicolor, suela gris oscura, etiqueta Nike"
    },
    {
        id: 167,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/167.jpg",
        descripcion: "Negro / Blanco - Running, \"ZOOMX\", smiley face en lateral, suela blanca"
    },
    {
        id: 168,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/168.jpg",
        descripcion: "Negro / Blanco - Running, \"ZOOMX\", swoosh blanco, pendiente Nike"
    },
    {
        id: 169,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/169.jpg",
        descripcion: "Negro / Blanco - Running, \"NIKE ZOOMX\", smiley, fotografía on-feet"
    },
    {
        id: 170,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/170.jpg",
        descripcion: "Negro / Blanco - Running, \"ZOOMX\", suela blanca chunky, versión ligeramente diferente"
    },
    {
        id: 171,
        nombre: "Adidas Predator Elite SG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/171.jpg",
        descripcion: "Blanco / Plateado / Azul / Rojo - Fútbol, tachones SG, correa \"PREDATOR\", suela holográfica"
    },
    {
        id: 172,
        nombre: "Adidas Predator Elite SG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/172.jpg",
        descripcion: "Negro / Blanco plateado / Menta - Fútbol, tachones SG, correa PREDATOR, suela menta"
    },
    {
        id: 173,
        nombre: "Nike Mercurial Vapor XV Elite SG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/173.jpg",
        descripcion: "Marrón / Plateado / Verde neón - Fútbol, tachones SG, Flyknit marrón, suela verde neón"
    },
    {
        id: 174,
        nombre: "Adidas F50 Elite FG / X Crazyfast",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/174.jpg",
        descripcion: "Blanco / Teal / Rojo / Amarillo - Fútbol, tachones FG, upper gráfico multicolor"
    },
    {
        id: 175,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/175.jpg",
        descripcion: "Rojo / Blanco plateado / Negro - Fútbol, tachones FG, correa roja, suela roja holográfica"
    },
    {
        id: 176,
        nombre: "Nike Street Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/176.jpg",
        descripcion: "Amarillo / Blanco / Gum - Fútbol sala, \"NIKE STREET GATO\", upper suede amarillo"
    },
    {
        id: 177,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/177.jpg",
        descripcion: "Amarillo neón / Verde / Naranja - Fútbol, tachones FG, suela naranja traslúcida, talla 30-35"
    },
    {
        id: 178,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/178.jpg",
        descripcion: "Plateado / Multicolor knit / Verde - Fútbol, tachones FG, suela traslúcida, talla 30-35"
    },
    {
        id: 179,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/179.jpg",
        descripcion: "Blanco / Azul / Negro / Amarillo - Fútbol, tachones FG, suela azul traslúcida, talla 30-35"
    },
    {
        id: 180,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/180.jpg",
        descripcion: "Negro / Verde neón - Fútbol, tachones FG, texto \"FC26\", suela verde"
    },
    {
        id: 181,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/181.jpg",
        descripcion: "Blanco / Negro / Azul cielo / Amarillo - Fútbol, tachones FG, suela holográfica iridiscente"
    },
    {
        id: 182,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/182.jpg",
        descripcion: "Blanco / Rojo / Negro - Fútbol, tachones FG, correa roja, suela holográfica roja"
    },
    {
        id: 183,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/183.jpg",
        descripcion: "Blanco / Negro / Azul cielo - Fútbol, tachones FG, correa blanca, suela holográfica azul"
    },
    {
        id: 184,
        nombre: "Nike Phantom GX II Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/184.jpg",
        descripcion: "Crema / Vino / Negro / Blanco - Fútbol, tachones FG, \"NIKE UNITED 002\", Flyknit, sin lengüeta"
    },
    {
        id: 185,
        nombre: "Nike Mercurial Superfly IX Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/185.jpg",
        descripcion: "Blanco / Menta / Rosa / Rojo - Fútbol, tachones FG, collarín sock, suela roja"
    },
    {
        id: 186,
        nombre: "Nike Mercurial Superfly IX Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/186.jpg",
        descripcion: "Rosa coral / Azul cielo / Plateado - Fútbol, tachones FG, collarín sock, \"TR\" lateral"
    },
    {
        id: 187,
        nombre: "Nike Mercurial Vapor XVI Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/187.jpg",
        descripcion: "Lila / Amarillo neón - Fútbol, tachones FG, \"NIKE UNITED 001\", knit lila"
    },
    {
        id: 188,
        nombre: "Nike Mercurial Vapor XVI Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/188.jpg",
        descripcion: "Rojo-naranja / Rosa / Azul cielo - Fútbol, tachones FG, knit degradado"
    },
    {
        id: 189,
        nombre: "Adidas X Crazyfast TF / Dembélé",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/189.jpg",
        descripcion: "Azul marino / Dorado - Fútbol turf, edición Dembélé, gráficos dorados, talla normal"
    },
    {
        id: 190,
        nombre: "Nike Mercurial Vapor XV TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/190.jpg",
        descripcion: "Plateado / Multicolor / Verde - Fútbol turf, talla 30-35"
    },
    {
        id: 191,
        nombre: "Adidas X Crazyfast / Messi TF",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/191.jpg",
        descripcion: "Azul rey / Amarillo neón / Blanco - Fútbol turf, \"MESS\" en lateral, suela neón"
    },
    {
        id: 192,
        nombre: "Adidas F50 League TF",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/192.jpg",
        descripcion: "Verde neón total / Negro - Fútbol turf, \"F.GO\" en lateral, suela verde neón"
    },
    {
        id: 193,
        nombre: "Nike Mercurial Superfly VI TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/193.jpg",
        descripcion: "Naranja total / Dorado / Negro - Fútbol turf, collarín sock, suela naranja"
    },
    {
        id: 194,
        nombre: "Nike Mercurial Superfly IX Elite TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/194.jpg",
        descripcion: "Lila / Gris / Rosa / Plateado - Fútbol turf, collarín sock, \"11\" en lateral"
    },
    {
        id: 195,
        nombre: "Nike Mercurial Superfly IX Elite TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/195.jpg",
        descripcion: "Vino / Crema / Negro / Plateado - Fútbol turf, collarín sock, \"NIKE UNITED 003\", print leopardo"
    },
    {
        id: 196,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/196.jpg",
        descripcion: "Negro / Verde neón / Blanco - Fútbol sala, \"HYPERFUSE\", \"LUNARLOX\", suela plana"
    },
    {
        id: 197,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/197.jpg",
        descripcion: "Amarillo / Negro / Blanco - Fútbol sala, \"HYPERFUSE\", suela blanca lisa"
    },
    {
        id: 198,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/198.jpg",
        descripcion: "Gris / Azul / Negro / Verde neón - Fútbol sala, \"LUNARLOX\", suela azul-verde bicolor, Flyknit multicolor"
    },
    {
        id: 199,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/199.jpg",
        descripcion: "Amarillo neón / Negro / Blanco - Fútbol sala, \"HYPERFUSE\", rayas negras verticales, suela crema"
    },
    {
        id: 200,
        nombre: "Nike / Supreme SB Gato IC",
        precio: "$250.000",
        marca: "Nike / Supreme",
        imagen: "img/200.jpg",
        descripcion: "Rojo / Naranja / Blanco / Gum - Fútbol sala, collab Supreme, paneles naranja a rayas, suela goma caramelo"
    },
    {
        id: 201,
        nombre: "Nike SB Gato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/201.jpg",
        descripcion: "Azul rey / Amarillo - Fútbol sala, texto \"II GATO\", swoosh amarillo, suela naranja goma"
    },
    {
        id: 202,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/202.jpg",
        descripcion: "Negro / Blanco / Amarillo - Fútbol sala, texto \"GATO\", swoosh blanco, suela amarilla"
    },
    {
        id: 203,
        nombre: "Nike SB Gato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/203.jpg",
        descripcion: "Azul / Rojo / Marino / Blanco - Fútbol sala, texto \"II GATO\", upper azul con detalle rojo, suela goma"
    },
    {
        id: 204,
        nombre: "Nike / Supreme SB Gato IC",
        precio: "$250.000",
        marca: "Nike / Supreme",
        imagen: "img/204.jpg",
        descripcion: "Negro / Rosa / Teal / Gum - Fútbol sala, collab Supreme, paneles rosa a rayas, suela gum caramelo"
    },
    {
        id: 205,
        nombre: "Fila Upgr8 / Regoletto",
        precio: "$250.000",
        marca: "Fila",
        imagen: "img/205.jpg",
        descripcion: "Blanco / Gris / Azul marino / Menta - Chunky retro, suede y mesh, detalle muelle en talón, logo Fila"
    },
    {
        id: 206,
        nombre: "Fila Upgr8 / Regoletto",
        precio: "$250.000",
        marca: "Fila",
        imagen: "img/206.jpg",
        descripcion: "Blanco / Gris claro / Azul marino / Menta - Misma silhouette, etiqueta precio en mano, suela azul marino"
    },
    {
        id: 207,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/207.jpg",
        descripcion: "Negro total - Mesh y cuero negro, suela negra, unidades Air negras"
    },
    {
        id: 208,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/208.jpg",
        descripcion: "Azul rey / Azul cielo / Blanco / Teal - Degradado azul, unidades Air teal traslúcido, suela blanca"
    },
    {
        id: 209,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/209.jpg",
        descripcion: "Azul cielo / Lila / Blanco - Degradado lila a azul, suela blanca, unidades Air lila"
    },
    {
        id: 210,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/210.jpg",
        descripcion: "Negro total / Plateado reflectante - Collab Foot Locker, etiqueta metálica, upper negro con costura plateada"
    },
    {
        id: 211,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/211.jpg",
        descripcion: "Blanco / Rosa / Gris / Lila - Collab Foot Locker, etiqueta negra, unidades Air rosa-lila, suela blanca"
    },
    {
        id: 212,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/212.jpg",
        descripcion: "Blanco / Rosa / Gris - Upper blanco-gris degradado, swoosh rosa, en caja Nike, unidades Air rosa"
    },
    {
        id: 213,
        nombre: "Adidas Terrex Free Hiker GTX",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/213.jpg",
        descripcion: "Negro total / Gum - Trail/hike, Gore-Tex, tres rayas negras, suela Continental gum, par visto desde arriba"
    },
    {
        id: 214,
        nombre: "Nike / Jordan Kyrie 4",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "img/214.jpg",
        descripcion: "Negro total / Multicolor suela - Basketball high, upper negro, suela con segmentos naranja/rojo/azul"
    },
    {
        id: 215,
        nombre: "Lacoste L003 Neo / Joggeur",
        precio: "$250.000",
        marca: "Lacoste",
        imagen: "img/215.jpg",
        descripcion: "Blanco / Azul rey / Rojo / Plateado - Running retro, logo cocodrilo, mesh y cuero, \"LACOSTE\" lateral, suela cuadriculada"
    },
    {
        id: 216,
        nombre: "Puma California",
        precio: "$250.000",
        marca: "Puma",
        imagen: "img/216.jpg",
        descripcion: "Crema / Azul marino - Suede y mesh perforado, franja navy, logo \"PUMA CALIFORNIA\", suela crema gum"
    },
    {
        id: 217,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/217.jpg",
        descripcion: "Negro / Blanco - Running, swoosh blanco, suela blanca chunky con borde negro, logo copo nieve"
    },
    {
        id: 218,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/218.jpg",
        descripcion: "Negro / Blanco / Rojo - Running, swoosh blanco, suela blanca con ribete rojo, logo copo nieve"
    },
    {
        id: 219,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/219.jpg",
        descripcion: "Blanco / Negro / Gum dorado - Running, swoosh negro, suela crema con línea dorada gum, logo copo rojo"
    },
    {
        id: 220,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/220.jpg",
        descripcion: "Negro / Gris / Plateado - Running, swoosh plateado metálico, suela gris, logo copo gris"
    },
    {
        id: 221,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/221.jpg",
        descripcion: "Negro / Blanco - Running, swoosh blanco grande, suela blanca chunky, logo copo blanco"
    },
    {
        id: 222,
        nombre: "Skechers D'Lux Journey",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/222.jpg",
        descripcion: "Gris / Azul marino / Crema / Neón amarillo - Chunky running, \"D'LUX JOURNEY\" en suela, costura amarilla en upper, suela crema moteada"
    },
    {
        id: 223,
        nombre: "Puma California",
        precio: "$250.000",
        marca: "Puma",
        imagen: "img/223.jpg",
        descripcion: "Negro / Gris / Blanco / Rojo - Leather perforado, franja gris, etiqueta \"CALIFORNIA\" roja, suela blanca"
    },
    {
        id: 224,
        nombre: "Tommy Hilfiger / Tommy Jeans Cupsole Sneaker / Essential",
        precio: "$250.000",
        marca: "Tommy Hilfiger / Tommy Jeans",
        imagen: "img/224.jpg",
        descripcion: "Blanco / Azul marino / Rojo - Cuero liso, franja tricolor (azul-rojo-blanco), contrafuerte navy, etiqueta Tommy Jeans"
    },
    {
        id: 225,
        nombre: "Tommy Hilfiger Essential Cupsole",
        precio: "$250.000",
        marca: "Tommy Hilfiger",
        imagen: "img/225.jpg",
        descripcion: "Blanco total - Cuero liso monocromo, texto \"TOMMY HILFIGER\" lateral, línea roja+negra tonal"
    },
    {
        id: 226,
        nombre: "Tommy Hilfiger Essential Cupsole",
        precio: "$250.000",
        marca: "Tommy Hilfiger",
        imagen: "img/226.jpg",
        descripcion: "Blanco / Negro - Cuero liso, monograma geométrico TH en upper, contrafuerte navy, etiqueta Tommy Hilfiger"
    },
    {
        id: 227,
        nombre: "Tommy Hilfiger Essential Cupsole",
        precio: "$250.000",
        marca: "Tommy Hilfiger",
        imagen: "img/227.jpg",
        descripcion: "Blanco total - Cuero perforado, franja tricolor lateral vertical \"TOMMY HILFIGER\", presentación editorial"
    },
    {
        id: 228,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "img/228.jpg",
        descripcion: "Negro / Wheat (camel) / Blanco - Bota media, nubuck negro, contrafuerte wheat, cordones negros con agujetas metálicas, logo árbol"
    },
    {
        id: 229,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "img/229.jpg",
        descripcion: "Negro total - Nubuck negro, logo árbol plateado metálico, cordones negros con agujetas plateadas, suela blanca"
    },
    {
        id: 230,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "img/230.jpg",
        descripcion: "Wheat / Azul marino - Nubuck camel clásico, logo árbol dorado, cordones bicolor amarillo-burdeo, agujetas doradas"
    },
    {
        id: 231,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "img/231.jpg",
        descripcion: "Negro / Wheat / Blanco - Dos pares, vista superior, nubuck negro con talón wheat, cordones elásticos negros"
    },
    {
        id: 232,
        nombre: "New Balance 574 (Cordura)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/232.jpg",
        descripcion: "Gris / Azul pizarra / Verde oliva / Blanco - Cordura fabric + suede, logo N blanco biselado, etiqueta Cordura, suela ENCAP crema"
    },
    {
        id: 233,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/233.jpg",
        descripcion: "Crema / Azul marino / Gum rosa - Suede crema, logo N navy, suela gum rosado, foto on-feet"
    },
    {
        id: 234,
        nombre: "New Balance 574 (Cordura)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/234.jpg",
        descripcion: "Kaki / Azul pizarra / Blanco - Dos pares, Cordura fabric, logo N gris y blanco, suela crema"
    },
    {
        id: 235,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/235.jpg",
        descripcion: "Azul marino / Rojo / Gris / Gum - Suede navy, logo N rojo, suela ENCAP blanca, suela exterior gum, dos pares"
    },
    {
        id: 236,
        nombre: "Adidas Terrex Free Hiker GTX",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/236.jpg",
        descripcion: "Negro total - Versión negro total, suela Continental con logotipo naranja, Gore-Tex"
    },
    {
        id: 237,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/237.jpg",
        descripcion: "Negro / Gris / Naranja / Crema - Trail, \"NIKE TRAIL ATC\" en suela, Flywire, suela crema+naranja"
    },
    {
        id: 238,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/238.jpg",
        descripcion: "Blanco / Gris / Negro / Gum - Trail, \"NIKE TRAIL ATC\" en suela, upper knit blanco, suela negra con gum, foto on-feet"
    },
    {
        id: 239,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/239.jpg",
        descripcion: "Negro / Blanco / Lila / Verde oliva - Foto grupal varios colorways en tienda, Air Max 90 clásico en primer plano negro/blanco"
    },
    {
        id: 240,
        nombre: "Nike Free Metcon 6",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/240.jpg",
        descripcion: "Negro / Blanco - Training, \"NIKE FREE METCON 6\", suela blanca acanalada, swoosh mini blanco"
    },
    {
        id: 241,
        nombre: "Nike Free Metcon 6",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/241.jpg",
        descripcion: "Blanco total - Training, Flyknit sock-fit blanco, suela blanca acanalada, swoosh negro, foto on-feet"
    },
    {
        id: 242,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/242.jpg",
        descripcion: "Blanco / Marino / Crema + (Teal/Blanco de fondo) - \"ZOOMX\" lateral, swoosh marino, suela crema; al fondo otro par teal"
    },
    {
        id: 243,
        nombre: "Nike ZoomX (Running)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/243.jpg",
        descripcion: "Blanco / Turquesa - Suela ZoomX turquesa gruesa, swoosh azul marino, upper mesh blanco"
    },
    {
        id: 244,
        nombre: "Nike ZoomX (Running)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/244.jpg",
        descripcion: "Blanco / Verde neón - Suela ZoomX verde neón, swoosh negro, upper mesh blanco con líneas amarillas"
    },
    {
        id: 245,
        nombre: "Adidas Campus 00s",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/245.jpg",
        descripcion: "Negro / Blanco - Gamuza negra, 3 rayas blancas, suela gum beige, logo trefoil en lengüeta"
    },
    {
        id: 246,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "img/246.jpg",
        descripcion: "Negro / Gris plata - Logo AX grande en lateral, upper mesh/gamuza negro, suela crema/negra"
    },
    {
        id: 247,
        nombre: "Skechers Max Protect",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/247.jpg",
        descripcion: "Negro / Gris - Tecnología Max Protect + Goodyear, suela robusta gris moteada, cordones reflectivos"
    },
    {
        id: 248,
        nombre: "Skechers Max Protect Waterproof",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/248.jpg",
        descripcion: "Azul marino / Gris - Igual al anterior pero azul navy, detalle \"Waterproof\" en lateral"
    },
    {
        id: 249,
        nombre: "Skechers Max Protect",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/249.jpg",
        descripcion: "Verde oliva / Negro - Upper verde oliva + negro, suela negra, Goodyear en suela"
    },
    {
        id: 250,
        nombre: "Puma Palermo",
        precio: "$250.000",
        marca: "Puma",
        imagen: "img/250.jpg",
        descripcion: "Blanco / Beige / Crema - Chunky retro, gamuza beige, forma PUMA en lateral, suela blanca"
    },
    {
        id: 251,
        nombre: "Puma Palermo",
        precio: "$250.000",
        marca: "Puma",
        imagen: "img/251.jpg",
        descripcion: "Blanco / Negro / Crema - Top view, upper blanco con panel negro, logo PUMA en plantilla, suela crema"
    },
    {
        id: 252,
        nombre: "Skechers Go Run Elevate",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/252.jpg",
        descripcion: "Negro / Rosa fucsia - Suela Go Run blanca con detalles fucsia, upper negro mesh, mujer"
    },
    {
        id: 253,
        nombre: "Skechers Go Run Elevate",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/253.jpg",
        descripcion: "Blanco / Menta / Azul lavanda - Suela GoRun blanca con franja azul, detalles menta, mujer"
    },
    {
        id: 254,
        nombre: "Timberland 6-Inch Premium Boot",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "img/254.jpg",
        descripcion: "Trigo / Negro - Bota clásica nubuck trigo, collarín negro, cordones marrón oscuro, suela rubber camel"
    },
    {
        id: 255,
        nombre: "Hugo Boss BOSS Runner",
        precio: "$250.000",
        marca: "Hugo Boss",
        imagen: "img/255.jpg",
        descripcion: "Gris oscuro / Gris claro - Diseño jogger retro bicolor, logo BOSS en lateral, suela blanca, upper gamuza + nylon"
    },
    {
        id: 256,
        nombre: "Adidas Adizero",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/256.jpg",
        descripcion: "Negro / Blanco - 3 rayas blancas anchas, upper mesh negro, suela Lightstrike blanca, perfil running"
    },
    {
        id: 257,
        nombre: "Adidas Pureboost / EQ21",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/257.jpg",
        descripcion: "Negro / Gris plata - 3 barras plateadas en lateral, upper knit negro, suela blanca, talla marcada \"38\""
    },
    {
        id: 258,
        nombre: "Skechers ArchFit (Bobs)",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/258.jpg",
        descripcion: "Negro total - Slip-on knit negro, logo S plateado, tecnología ArchFit en talón, suela negra"
    },
    {
        id: 259,
        nombre: "Skechers UltraLight Slip-On",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/259.jpg",
        descripcion: "Negro total - Sin cordones, upper knit negro, suela UltraLight negra, pull tab trasero"
    },
    {
        id: 260,
        nombre: "Skechers Max Cushion",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/260.jpg",
        descripcion: "Negro / Blanco - Logo S plateado, suela Max Cushion blanca muy gruesa, upper mesh negro"
    },
    {
        id: 261,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/261.jpg",
        descripcion: "Negro / Naranja - Hombre, upper nylon negro liso, logo gallo negro, suela naranja contrastante"
    },
    {
        id: 262,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/262.jpg",
        descripcion: "Rojo / Blanco - Hombre, upper rojo monocromático, panel trasero blanco, logo gallo rojo, suela blanca"
    },
    {
        id: 263,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/263.jpg",
        descripcion: "Camel / Crema - Hombre, upper camel con gamuza, logo gallo crema, suela crema/gris"
    },
    {
        id: 264,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/264.jpg",
        descripcion: "Negro / Salmon/Rosa - Dama, upper negro con detalles salmón en talón y logo, suela blanca"
    },
    {
        id: 265,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/265.jpg",
        descripcion: "Rojo / Burdeos - Hombre, upper rojo con logo gallo burdeos, suela blanca/negra"
    },
    {
        id: 266,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/266.jpg",
        descripcion: "Negro / Gris - Hombre, upper negro con panel central gris, logo gallo negro sobre gris, suela blanca"
    },
    {
        id: 267,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "img/267.jpg",
        descripcion: "Negro / Gris - Retro runner, upper nylon gris oscuro + gamuza negra, franja lateral gris, suela blanca"
    },
    {
        id: 268,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "img/268.jpg",
        descripcion: "Negro / Blanco dorado - Upper negro + gamuza, franja blanca, logo PUMA dorado, suela blanca"
    },
    {
        id: 269,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "img/269.jpg",
        descripcion: "Gris / Blanco / Lila - Franja blanca, detalles lila en talón, logo PUMA dorado, suela blanca, mujer"
    },
    {
        id: 270,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "img/270.jpg",
        descripcion: "Blanco / Azul cielo - Upper blanco + gamuza gris claro, franja azul cielo, logo PUMA dorado, suela blanca"
    },
    {
        id: 271,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/271.jpg",
        descripcion: "Gris / Azul petróleo - Upper gamuza envejecida/washed, swoosh azul petróleo, suela azul, tag chino"
    },
    {
        id: 272,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/272.jpg",
        descripcion: "Blanco / Salmón/Melocotón - Upper cuero blanco, swoosh y paneles melocotón, suela melocotón, mujer"
    },
    {
        id: 273,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/273.jpg",
        descripcion: "Blanco / Azul universitario - Upper cuero blanco, swoosh y paneles azul UNC, suela azul, logo en lengüeta"
    },
    {
        id: 274,
        nombre: "On Running Cloudultra / Cloudsurfer",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/274.jpg",
        descripcion: "Blanco menta / Gris / Naranja - Suela CloudTec perforada negra, detalles naranja y rojo bandera suiza, upper mesh"
    },
    {
        id: 275,
        nombre: "Adidas Grand Court",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/275.jpg",
        descripcion: "Blanco / Negro - Clean court shoe, upper cuero blanco, talón negro, logo ADI perforado, suela blanca"
    },
    {
        id: 276,
        nombre: "Vans Lowland CC",
        precio: "$250.000",
        marca: "Vans",
        imagen: "img/276.jpg",
        descripcion: "Azul marino / Gris / Salmón - Upper gamuza azul + gris, franja Vans crema, suela salmón/terrazo, cordones crema"
    },
    {
        id: 277,
        nombre: "New Balance 530",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/277.jpg",
        descripcion: "Blanco / Plata / Azul - Upper mesh blanco, logo N plateado, código AB74RB en talón, suela blanca chunky retro"
    },
    {
        id: 278,
        nombre: "Adidas Yeezy Boost 350 V2",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/278.jpg",
        descripcion: "Negro total (\"Onyx/Black\") - Knit Primeknit negro, franja negra lateral, cordones reflectivos, suela boost negra, detalle rojo en pull tab"
    },
    {
        id: 279,
        nombre: "Adidas Yeezy Boost 350 V2",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/279.jpg",
        descripcion: "Blanco / Gris (\"Bone\") - Knit Primeknit blanco, franja gris semitransparente, suela Boost crema/amarillenta"
    },
    {
        id: 280,
        nombre: "Adidas Yeezy Boost 350 V2",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/280.jpg",
        descripcion: "Gris bicolor (\"Static\") - Knit gris con patrón rayado, franja gris reflectiva, suela Boost crema"
    },
    {
        id: 281,
        nombre: "Hoka Speedgoat 5",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "img/281.jpg",
        descripcion: "Gris camo / Oliva / Amarillo - Caballero, upper camo gris oscuro, logo HOKA amarillo en lateral, suela trail robusta amarilla"
    },
    {
        id: 282,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "img/282.jpg",
        descripcion: "Azul grisáceo / Naranja - Caballero, upper mesh azul cielo, logo HOKA azul, franja naranja en suela, suela blanca"
    },
    {
        id: 283,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "img/283.jpg",
        descripcion: "Negro / Blanco - Caballero, upper mesh negro, logo HOKA blanco grande, suela blanca muy gruesa"
    },
    {
        id: 284,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "img/284.jpg",
        descripcion: "Gris / Blanco - Caballero, upper mesh gris uniforme, logo HOKA negro, suela blanca"
    },
    {
        id: 285,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "img/285.jpg",
        descripcion: "Azul navy / Rojo / Amarillo - Caballero, upper azul oscuro, collarín rojo, logo HOKA amarillo, suela blanca con borde rojo"
    },
    {
        id: 286,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "img/286.jpg",
        descripcion: "Verde oliva / Crema - Caballero, upper mesh verde menta/oliva, suela crema blanca gruesa"
    },
    {
        id: 287,
        nombre: "Hoka Speedgoat 5 Trail",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "img/287.jpg",
        descripcion: "Negro / Blanco / Gris moteado - Caballero, upper negro con estampado splash blanco/gris, suela trail con lugs, logo rojo"
    },
    {
        id: 288,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/288.jpg",
        descripcion: "Blanco / Gris / Azul / Lila - Upper blanco + gamuza gris, franja azul cielo en suela, collarín lila, logo gallo nacarado"
    },
    {
        id: 289,
        nombre: "Le Coq Sportif Racerone",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/289.jpg",
        descripcion: "Negro / Lila - Dama, upper cuero/nylon negro liso, suela lila, \"le coq sportif\" en lateral blanco"
    },
    {
        id: 290,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/290.jpg",
        descripcion: "Negro / Lila - Upper nylon negro, logo gallo blanco, franja lila en suela, suela blanca"
    },
    {
        id: 291,
        nombre: "Le Coq Sportif R500",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "img/291.jpg",
        descripcion: "Rosa palo / Burdeos / Crema - Upper nylon rosa palo + gamuza crema, logo gallo en triángulo negro, suela blanca/negra"
    },
    {
        id: 292,
        nombre: "On Running Cloudtechase",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/292.jpg",
        descripcion: "Negro / Gris / Blanco - Suela Cloudtec perforada blanca, upper negro + gris, logo On blanco, botón suizo rojo"
    },
    {
        id: 293,
        nombre: "On Running Cloudtechase",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/293.jpg",
        descripcion: "Azul cielo / Gris oscuro / Naranja - Suela Cloudtec perforada blanca, upper bicolor azul + gris, pull tab naranja, bandera suiza"
    },
    {
        id: 294,
        nombre: "Adidas Response CL / Spiritain",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/294.jpg",
        descripcion: "Blanco / Gris / Negro - Imagen IA, 3 barras negras 3D en lateral, upper blanco/gris, suela chunky blanca"
    },
    {
        id: 295,
        nombre: "Adidas Response CL / Spiritain",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/295.jpg",
        descripcion: "Negro / Gris / Blanco - Imagen IA, misma silueta pero en negro, 3 barras 3D, suela blanca"
    },
    {
        id: 296,
        nombre: "Adidas Samba OG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/296.jpg",
        descripcion: "Blanco / Rosa nude - Vista trasera, upper cuero blanco, 3 rayas rosa tenue/rejilla, suela crema"
    },
    {
        id: 297,
        nombre: "Adidas Superstar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/297.jpg",
        descripcion: "Blanco / Verde - Upper cuero blanco, 3 rayas verdes, punta shell toe, caja azul Adidas Originals"
    },
    {
        id: 298,
        nombre: "Nike Air Max BW",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/298.jpg",
        descripcion: "Gris / Azul cielo / Negro / Rojo - Unidad Air BW visible en talón, upper multicolor gris + azul, swoosh blanco, suela roja"
    },
    {
        id: 299,
        nombre: "Louis Vuitton LV Skate Sneaker",
        precio: "$250.000",
        marca: "Louis Vuitton",
        imagen: "img/299.jpg",
        descripcion: "Blanco / Negro - Monograma LV floral cut-out negro en upper blanco, suela blanca con iconos LV"
    },
    {
        id: 300,
        nombre: "Puma Park Lifestyle",
        precio: "$250.000",
        marca: "Puma",
        imagen: "img/300.jpg",
        descripcion: "Beige / Blanco / Gum - Logo puma de felino blanco en lateral beige, suela gum caramel, caja roja Puma"
    },
    {
        id: 301,
        nombre: "Nike SB Dunk Low × UNLA",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/301.jpg",
        descripcion: "Verde menta / Gris / Azul navy - Collab UN/LA, upper ripstop verde menta + gris, swoosh serpiente gris, suela azul, parche amarillo \"UN/LA\""
    },
    {
        id: 302,
        nombre: "Nike SB Dunk Low × UNLA",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/302.jpg",
        descripcion: "Verde menta / Gris / Azul - Misma collab, vista on-foot lateral, detalle logo skater en lateral, cordones blancos"
    },
    {
        id: 303,
        nombre: "On Running Cloudmonster",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/303.jpg",
        descripcion: "Azul navy / Verde neón - Suela CloudTec verde neón enorme, \"CLOUDTEC\" en banda lateral blanca, upper mesh navy"
    },
    {
        id: 304,
        nombre: "Adidas Response 3.0 / Spiritain",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/304.jpg",
        descripcion: "Negro total / Plata - Upper chunky negro todo, 3 barras plateadas, suela negra con burbujas, caja Adidas"
    },
    {
        id: 305,
        nombre: "On Running Cloudtechase",
        precio: "$250.000",
        marca: "On Running",
        imagen: "img/305.jpg",
        descripcion: "Blanco total / Gum - Suela Cloudtec blanca con huecos, upper mesh blanco, logo \"on\" negro, suela gum"
    },
    {
        id: 306,
        nombre: "Nike Air Force 1 Low Custom",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/306.jpg",
        descripcion: "Blanco / Floral japonés - Upper cuero blanco, swoosh con arte floral Yayoi Kusama/japonés, cordones blancos, imagen IA"
    },
    {
        id: 307,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/307.jpg",
        descripcion: "Blanco / Swoosh outline rosa + menta - Upper cuero blanco, swoosh contorno bicolor (rosa en un pie, turquesa en el otro), medalla dorada"
    },
    {
        id: 308,
        nombre: "Nike × BAPE Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike × BAPE",
        imagen: "img/308.jpg",
        descripcion: "Crema / Azul navy - Upper cuero crema, swoosh camo azul BAPE, mini swoosh azul, logo BAPE en lateral, suela azul"
    },
    {
        id: 309,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/309.jpg",
        descripcion: "Blanco / Marrón chocolate - Upper gamuza/cuero blanco crema, swoosh marrón oscuro, \"NIKE AIR\" en talón, suela marrón"
    },
    {
        id: 310,
        nombre: "Diesel S-Serendipity",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "img/310.jpg",
        descripcion: "Verde oliva / Gris / Negro / Naranja - \"For Successful Living\", upper verde oliva + gamuza gris, detalles naranja en agujetas, suela blanca"
    },
    {
        id: 311,
        nombre: "Diesel S-Serendipity",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "img/311.jpg",
        descripcion: "Azul denim / Gris / Blanco - Tejido denim azul en upper, gamuza gris, logo DIESEL, suela blanca"
    },
    {
        id: 312,
        nombre: "Diesel S-Serendipity",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "img/312.jpg",
        descripcion: "Negro total / Gum - Upper negro liso + gamuza, logo DIESEL, suela blanca con outsole gum caramel"
    },
    {
        id: 313,
        nombre: "Diesel S-Athos",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "img/313.jpg",
        descripcion: "Gris / Negro - \"DIESEL 1978\" en lateral, upper gamuza gris + nylon, paneles negros, suela blanca"
    },
    {
        id: 314,
        nombre: "Diesel S-Athos",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "img/314.jpg",
        descripcion: "Negro / Gum - \"DIESEL 1978\", upper negro gamuza + nylon, suela negra + gum caramel, caja negra"
    },
    {
        id: 315,
        nombre: "Adidas Samba OG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/315.jpg",
        descripcion: "Blanco / Negro / Naranja - Suela naranja iridiscente, 3 barras negras, upper cuero/gamuza blanco, detalle corazón rosa"
    },
    {
        id: 316,
        nombre: "Adidas Drop Step",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/316.jpg",
        descripcion: "Crema / Lila - \"DROP STEP\" en lateral, upper crema cuero, 3 rayas lila, suela crema con acentos lila"
    },
    {
        id: 317,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "img/317.jpg",
        descripcion: "Blanco total / Gum - Upper cuero blanco, logo N blanco embossed, suela ENCAP blanca + gum caramel"
    },
    {
        id: 318,
        nombre: "Adidas Response / Terrex",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/318.jpg",
        descripcion: "Gris claro / Verde neón - Upper mesh gris, 3 barras verde neón, suela blanca, logo Adidas verde neón en talón"
    },
    {
        id: 319,
        nombre: "Reebok GL 6000",
        precio: "$250.000",
        marca: "Reebok",
        imagen: "img/319.jpg",
        descripcion: "Gris / Azul / Lila - Gamuza gris + mesh azul, detalles lila en collarín/suela, suela gum, \"GL 6000\" en lateral"
    },
    {
        id: 320,
        nombre: "Vans Knu-Skool",
        precio: "$250.000",
        marca: "Vans",
        imagen: "img/320.jpg",
        descripcion: "Negro / Blanco - Upper canvas/gamuza negro, franja Vans blanca, suela chunky blanca gruesa"
    },
    {
        id: 321,
        nombre: "Vans Style 36",
        precio: "$250.000",
        marca: "Vans",
        imagen: "img/321.jpg",
        descripcion: "Negro / Crema - Gamuza negra, franja Vans crema, suela crema envejecida, lengüeta \"Off The Wall\", caja roja"
    },
    {
        id: 322,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/322.jpg",
        descripcion: "Blanco / Azul rey / Gris - Unidad Cushlon visible, upper mesh blanco + plástico azul real, swoosh azul, suela crema"
    },
    {
        id: 323,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/323.jpg",
        descripcion: "Blanco / Negro (\"Panda\") - Flyer publicitario, upper cuero blanco, swoosh + paneles negro, suela blanca — NO es producto individual"
    },
    {
        id: 324,
        nombre: "Skechers Go Run Slip-In",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/324.jpg",
        descripcion: "Negro / Blanco / Lila - Sin cordones, knit negro, logo S plateado, suela GoRun blanca con franja lila"
    },
    {
        id: 325,
        nombre: "Skechers Go Run Slip-In",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/325.jpg",
        descripcion: "Gris / Blanco / Rosa - Sin cordones, knit gris, logo S rosado, suela GoRun blanca"
    },
    {
        id: 326,
        nombre: "Nike Air Max 90 × Cordura",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/326.jpg",
        descripcion: "Verde oliva / Amarillo - Upper Cordura verde oliva, swoosh oliva, burbuja Air visible, detalles amarillo neón, caja en fondo"
    },
    {
        id: 327,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "img/327.jpg",
        descripcion: "Negro / Gris / Turquesa - Upper mesh negro, swoosh gris, burbuja Air turquesa, logo turquesa en talón"
    },
    {
        id: 328,
        nombre: "Adidas Samba OG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "img/328.jpg",
        descripcion: "Blanco / Negro / Gum - Upper cuero blanco, 3 rayas negras, \"SAMBA\" en lateral dorado, suela gum marrón oscuro"
    },
    {
        id: 329,
        nombre: "Skechers GoWalk Outdoor",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/329.jpg",
        descripcion: "Café / Gris / Negro - Colección Outdoor, burbuja Air azul en talón, Goodyear en suela, Memory Foam, upper café + gris"
    },
    {
        id: 330,
        nombre: "Skechers GoWalk Outdoor",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/330.jpg",
        descripcion: "Azul navy / Gris / Naranja - Misma colección Outdoor, burbuja Air naranja en talón, Goodyear, upper navy + gris"
    },
    {
        id: 331,
        nombre: "Skechers GoWalk Outdoor",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/331.jpg",
        descripcion: "Negro / Gris - Colección Outdoor, burbuja Air gris en talón, Goodyear, upper negro + gris, suela negra"
    },
    {
        id: 332,
        nombre: "Skechers EdgeRide BOA",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/332.jpg",
        descripcion: "Negro total - Sistema de cierre BOA (dial giratorio), tecnología EdgeRide, upper mesh negro, suela negra robusta"
    },
    {
        id: 333,
        nombre: "Skechers Distance Walker",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "img/333.jpg",
        descripcion: "Negro / Gris - \"Water Repellent\", Goodyear en suela, upper negro + gris, suela trail gris gruesa, logo S en lateral"
    }
];