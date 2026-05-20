const productos = [
    {
        id: 1,
        nombre: "Nike Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "1.webp",
        descripcion: "Negro / Gris menta"

    },
    {
        id: 2,
        nombre: "Louis Vuitton LV Trainer",
        precio: "$250.000",
        marca: "Louis Vuitton",
        imagen: "2.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 3,
        nombre: "Converse Chuck Taylor All Star Hi (Alistar collab)",
        precio: "$250.000",
        marca: "Converse",
        imagen: "3.webp",
        descripcion: "Blanco / Multicolor"

    },
    {
        id: 4,
        nombre: "Adidas Samba",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "4.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 5,
        nombre: "Reebok Classic Leather",
        precio: "$250.000",
        marca: "Reebok",
        imagen: "5.webp",
        descripcion: "Beige / Marrón"

    },
    {
        id: 6,
        nombre: "Reebok Classic Leather",
        precio: "$250.000",
        marca: "Reebok",
        imagen: "6.webp",
        descripcion: "Azul marino / Azul cielo / Blanco"

    },
    {
        id: 7,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "7.webp",
        descripcion: "Negro, Blanco, Gris, Verde oliva, Rojo, Amarillo, Azul, Naranja, Teal"

    },
    {
        id: 8,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "8.webp",
        descripcion: "Blanco / Negro / Gum"

    },
    {
        id: 9,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "9.webp",
        descripcion: "Blanco total"

    },
    {
        id: 10,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "10.webp",
        descripcion: "Verde oliva / Blanco"

    },
    {
        id: 11,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "11.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 12,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "12.webp",
        descripcion: "Rojo / Blanco"

    },
    {
        id: 13,
        nombre: "Skechers Ultra Flex Air-Cooled",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "13.webp",
        descripcion: "Negro total"

    },
    {
        id: 14,
        nombre: "Skechers Vapor Foam",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "14.webp",
        descripcion: "Gris carbón / Blanco / Detalles neón amarillo"

    },
    {
        id: 15,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "15.webp",
        descripcion: "Beige / Teal / Naranja"

    },
    {
        id: 16,
        nombre: "Le Coq Sportif Omega",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "16.webp",
        descripcion: "Azul marino / Blanco / Gris"

    },
    {
        id: 17,
        nombre: "Le Coq Sportif Omega",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "17.webp",
        descripcion: "Negro / Rojo"

    },
    {
        id: 18,
        nombre: "Le Coq Sportif Omega",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "18.webp",
        descripcion: "Gris / Azul marino / Marrón"

    },
    {
        id: 19,
        nombre: "Nike / Jordan Air Jordan 1 Mid",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "19.webp",
        descripcion: "Negro charol / Blanco / Hielo"

    },
    {
        id: 20,
        nombre: "Nike / Jordan Air Jordan 1 Mid",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "20.webp",
        descripcion: "Rosa / Uva / Crema / Gum"

    },
    {
        id: 21,
        nombre: "Nike / Jordan Air Jordan 1 Mid",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "21.webp",
        descripcion: "Beige / Negro"

    },
    {
        id: 22,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "22.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 23,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "23.webp",
        descripcion: "Blanco / Azul marino / Rosa"

    },
    {
        id: 24,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "24.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 25,
        nombre: "Adidas Dreamstrike+",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "25.webp",
        descripcion: "Blanco / Negro / Rosa"

    },
    {
        id: 26,
        nombre: "Converse Chuck Taylor All Star Lift Hi",
        precio: "$250.000",
        marca: "Converse",
        imagen: "26.webp",
        descripcion: "Crema / Bordados florales multicolor"

    },
    {
        id: 27,
        nombre: "Converse Chuck Taylor All Star Lift Hi",
        precio: "$250.000",
        marca: "Converse",
        imagen: "27.webp",
        descripcion: "Negro / Bordados naturaleza multicolor"

    },
    {
        id: 28,
        nombre: "Nike Air Max BW",
        precio: "$250.000",
        marca: "Nike",
        imagen: "28.webp",
        descripcion: "Blanco / Gris / Azul / Rojo coral"

    },
    {
        id: 29,
        nombre: "Nike Shox TL",
        precio: "$250.000",
        marca: "Nike",
        imagen: "29.webp",
        descripcion: "Negro total"

    },
    {
        id: 30,
        nombre: "Sin nombre",
        precio: "$250.000",
        marca: "—",
        imagen: "30.webp",
        descripcion: ""

    },
    {
        id: 31,
        nombre: "Sin nombre",
        precio: "$250.000",
        marca: "—",
        imagen: "31.webp",
        descripcion: ""

    },
    {
        id: 32,
        nombre: "Sin nombre",
        precio: "$250.000",
        marca: "—",
        imagen: "32.webp",
        descripcion: ""

    },
    {
        id: 35,
        nombre: "On Running Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "35.webp",
        descripcion: "Negro total"

    },
    {
        id: 36,
        nombre: "On Running Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "36.webp",
        descripcion: "Beige rosado / Negro / Blanco"

    },
    {
        id: 37,
        nombre: "On Running Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "37.webp",
        descripcion: "Gris total"

    },
    {
        id: 38,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "38.webp",
        descripcion: "Beige / Negro / Blanco"

    },
    {
        id: 39,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "39.webp",
        descripcion: "Negro / Gris"

    },
    {
        id: 40,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "40.webp",
        descripcion: "Lila / Blanco"

    },
    {
        id: 41,
        nombre: "On Running Cloud X / Cloudnova",
        precio: "$250.000",
        marca: "On Running",
        imagen: "41.webp",
        descripcion: "Negro total"

    },
    {
        id: 42,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "42.webp",
        descripcion: "Negro total / Detalle verde neón"

    },
    {
        id: 43,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "43.webp",
        descripcion: "Negro / Gris / Azul holográfico"

    },
    {
        id: 44,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "44.webp",
        descripcion: "Azul marino / Blanco / Gris"

    },
    {
        id: 45,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "45.webp",
        descripcion: "Blanco / Gris / Rojo"

    },
    {
        id: 46,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "46.webp",
        descripcion: "Negro / Rojo"

    },
    {
        id: 47,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "47.webp",
        descripcion: "Negro / Blanco / Gris / Rojo"

    },
    {
        id: 48,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "48.webp",
        descripcion: "Blanco / Rojo / Negro"

    },
    {
        id: 49,
        nombre: "Nike / Jordan Air Jordan 13 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "49.webp",
        descripcion: "Blanco / Mostaza / Gum"

    },
    {
        id: 50,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "50.webp",
        descripcion: "Gris suede / Blanco"

    },
    {
        id: 51,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "51.webp",
        descripcion: "Crema / Azul gris"

    },
    {
        id: 52,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "52.webp",
        descripcion: "Verde oliva / Blanco"

    },
    {
        id: 53,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "53.webp",
        descripcion: "Rosa / Blanco / Gris"

    },
    {
        id: 54,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "54.webp",
        descripcion: "Blanco / Rosa"

    },
    {
        id: 55,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "55.webp",
        descripcion: "Blanco / Salmón"

    },
    {
        id: 56,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "56.webp",
        descripcion: "Gris / Azul marino / Blanco"

    },
    {
        id: 57,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "57.webp",
        descripcion: "Crema / Rosa / Blanco"

    },
    {
        id: 58,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "58.webp",
        descripcion: "Blanco total / Gum"

    },
    {
        id: 59,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "59.webp",
        descripcion: "Crema / Azul cielo / Negro"

    },
    {
        id: 60,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "60.webp",
        descripcion: "Gris / Azul marino / Kaki"

    },
    {
        id: 61,
        nombre: "New Balance 9060",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "61.webp",
        descripcion: "Gris total / Plateado"

    },
    {
        id: 62,
        nombre: "Nike V2K Run / Zoom Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "62.webp",
        descripcion: "Blanco / Crema / Gris"

    },
    {
        id: 63,
        nombre: "Nike V2K Run / Zoom Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "63.webp",
        descripcion: "Blanco / Gris / Swoosh negro"

    },
    {
        id: 64,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "64.webp",
        descripcion: "Morado / Lila / Rosa / Blanco"

    },
    {
        id: 65,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "65.webp",
        descripcion: "Rosa / Blanco"

    },
    {
        id: 66,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "66.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 67,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "67.webp",
        descripcion: "Blanco total"

    },
    {
        id: 68,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "68.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 69,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "69.webp",
        descripcion: "Blanco / Gris / Rojo coral"

    },
    {
        id: 70,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "70.webp",
        descripcion: "Gris oscuro / Negro / Naranja"

    },
    {
        id: 71,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "71.webp",
        descripcion: "Negro total / Gris iridiscente"

    },
    {
        id: 72,
        nombre: "Adidas Adizero Evo SL",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "72.webp",
        descripcion: "Blanco / Negro / Naranja"

    },
    {
        id: 73,
        nombre: "Nike Air Max BW",
        precio: "$250.000",
        marca: "Nike",
        imagen: "73.webp",
        descripcion: "Blanco / Gris / Azul / Rojo coral"

    },
    {
        id: 74,
        nombre: "New Balance 574 (estilo nuevo)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "74.webp",
        descripcion: "Gris / Azul marino / Gum"

    },
    {
        id: 75,
        nombre: "New Balance 574 (estilo nuevo)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "75.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 76,
        nombre: "Dolce & Gabbana NS1 Sneaker",
        precio: "$250.000",
        marca: "Dolce & Gabbana",
        imagen: "76.webp",
        descripcion: "Negro total"

    },
    {
        id: 77,
        nombre: "Dolce & Gabbana NS1 Sneaker",
        precio: "$250.000",
        marca: "Dolce & Gabbana",
        imagen: "77.webp",
        descripcion: "Blanco total"

    },
    {
        id: 78,
        nombre: "Dolce & Gabbana NS1 Sneaker",
        precio: "$250.000",
        marca: "Dolce & Gabbana",
        imagen: "78.webp",
        descripcion: "Negro / Rojo / Gris / Blanco"

    },
    {
        id: 79,
        nombre: "New Balance 990v6",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "79.webp",
        descripcion: "Gris / Beige / Blanco"

    },
    {
        id: 80,
        nombre: "New Balance 57/40",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "80.webp",
        descripcion: "Gris / Azul pizarra / Blanco"

    },
    {
        id: 81,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "81.webp",
        descripcion: "Blanco / Gris / Crema / Negro"

    },
    {
        id: 82,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "82.webp",
        descripcion: "Blanco / Rosa / Azul marino"

    },
    {
        id: 83,
        nombre: "Nike V2K Run / Zoom Vomero",
        precio: "$250.000",
        marca: "Nike",
        imagen: "83.webp",
        descripcion: "Blanco / Plateado / Lila"

    },
    {
        id: 84,
        nombre: "Nike Air Max 90 (collab)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "84.webp",
        descripcion: "Negro / Blanco / Charol"

    },
    {
        id: 85,
        nombre: "Nike Air Zoom Pegasus",
        precio: "$250.000",
        marca: "Nike",
        imagen: "85.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 86,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "86.webp",
        descripcion: "Blanco / Rosa / Azul marino"

    },
    {
        id: 87,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "87.webp",
        descripcion: "Plateado / Lila / Blanco"

    },
    {
        id: 88,
        nombre: "Nike Air Zoom Pegasus 41 XL",
        precio: "$250.000",
        marca: "Nike",
        imagen: "88.webp",
        descripcion: "Crema / Dorado / Gum"

    },
    {
        id: 89,
        nombre: "Nike Pegasus Trail / Wild Horse",
        precio: "$250.000",
        marca: "Nike",
        imagen: "89.webp",
        descripcion: "Blanco / Crema / Vino / Teal"

    },
    {
        id: 90,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "90.webp",
        descripcion: "Negro total"

    },
    {
        id: 91,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "91.webp",
        descripcion: "Crema / Gris / Marrón gum"

    },
    {
        id: 92,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "92.webp",
        descripcion: "Rojo total"

    },
    {
        id: 93,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "93.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 94,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "94.webp",
        descripcion: "Blanco total"

    },
    {
        id: 95,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "95.webp",
        descripcion: "Azul rey / Amarillo / Blanco gum"

    },
    {
        id: 96,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "96.webp",
        descripcion: "Negro / Amarillo / Rojo"

    },
    {
        id: 97,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "97.webp",
        descripcion: "Rojo / Blanco / Negro"

    },
    {
        id: 98,
        nombre: "Nike / Supreme SB Gato IC",
        precio: "$250.000",
        marca: "Nike / Supreme",
        imagen: "98.webp",
        descripcion: "Negro / Blanco / Rosa"

    },
    {
        id: 99,
        nombre: "Adidas Climacool / Ozweego",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "99.webp",
        descripcion: "Blanco / Rosa / Menta / Azul"

    },
    {
        id: 100,
        nombre: "Nike / Levi's Air Max 95",
        precio: "$250.000",
        marca: "Nike / Levi's",
        imagen: "100.webp",
        descripcion: "Gris denim / Negro"

    },
    {
        id: 101,
        nombre: "Nike / BAPE Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike / BAPE",
        imagen: "101.webp",
        descripcion: "Crema / Verde oliva / Camo"

    },
    {
        id: 102,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "102.webp",
        descripcion: "Blanco / Verde oliva"

    },
    {
        id: 103,
        nombre: "Nike Air Zoom Terra Kiger / Wildhorse",
        precio: "$250.000",
        marca: "Nike",
        imagen: "103.webp",
        descripcion: "Blanco / Negro / Rosa neón"

    },
    {
        id: 104,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "104.webp",
        descripcion: "Negro total / Gum"

    },
    {
        id: 105,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "105.webp",
        descripcion: "Gris / Verde oliva / Blanco"

    },
    {
        id: 106,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "106.webp",
        descripcion: "Blanco / Crema / Gum"

    },
    {
        id: 107,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "107.webp",
        descripcion: "Vino / Blanco / Gum"

    },
    {
        id: 108,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "108.webp",
        descripcion: "Beige / Blanco / Marino"

    },
    {
        id: 109,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "109.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 110,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "110.webp",
        descripcion: "Azul marino / Blanco"

    },
    {
        id: 111,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "111.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 112,
        nombre: "Nike Air Zoom Pegasus 37/38",
        precio: "$250.000",
        marca: "Nike",
        imagen: "112.webp",
        descripcion: "Salmón / Negro / Magenta"

    },
    {
        id: 113,
        nombre: "Nike Air Monarch IV",
        precio: "$250.000",
        marca: "Nike",
        imagen: "113.webp",
        descripcion: "Blanco / Azul marino"

    },
    {
        id: 114,
        nombre: "Nike Air Monarch IV",
        precio: "$250.000",
        marca: "Nike",
        imagen: "114.webp",
        descripcion: "Blanco / Gris / Naranja"

    },
    {
        id: 115,
        nombre: "Le Coq Sportif Veloce / Runner",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "115.webp",
        descripcion: "Negro total / Rojo"

    },
    {
        id: 116,
        nombre: "Nike / Jordan Air Jordan 3 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "116.webp",
        descripcion: "Blanco total / Crema"

    },
    {
        id: 117,
        nombre: "Nike / Jordan Air Jordan 3 Retro",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "117.webp",
        descripcion: "Negro / Gris / Blanco"

    },
    {
        id: 118,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "118.webp",
        descripcion: "Negro / Gris cemento ("

    },
    {
        id: 119,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "119.webp",
        descripcion: "Verde esmeralda / Crema / Naranja"

    },
    {
        id: 120,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "120.webp",
        descripcion: "Negro / Azul rey / Gris"

    },
    {
        id: 121,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "121.webp",
        descripcion: "Blanco / Azul universitario"

    },
    {
        id: 122,
        nombre: "Air Jordan Jordan 3 × Fragment Design",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "122.webp",
        descripcion: "Blanco / Negro"

    },
    {
        id: 123,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "123.webp",
        descripcion: "Crema / Camel / Negro / Naranja"

    },
    {
        id: 124,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "124.webp",
        descripcion: "Blanco / Rosa dusty"

    },
    {
        id: 125,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "125.webp",
        descripcion: "Blanco / Azul cielo / Rosa"

    },
    {
        id: 126,
        nombre: "Air Jordan Jordan 3 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "126.webp",
        descripcion: "Rosa melocotón / Crema / Burdeos"

    },
    {
        id: 127,
        nombre: "Nike Invincible Run 3",
        precio: "$250.000",
        marca: "Nike",
        imagen: "127.webp",
        descripcion: "Gris / Azul navy / Menta"

    },
    {
        id: 128,
        nombre: "Nike Invincible Run 3",
        precio: "$250.000",
        marca: "Nike",
        imagen: "128.webp",
        descripcion: "Blanco crema / Azul navy"

    },
    {
        id: 129,
        nombre: "Nike ZoomX Invincible Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "129.webp",
        descripcion: "Azul cielo / Azul petróleo"

    },
    {
        id: 130,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "130.webp",
        descripcion: "Negro total"

    },
    {
        id: 131,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "131.webp",
        descripcion: "Negro / Rojo"

    },
    {
        id: 132,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "132.webp",
        descripcion: "Negro / Blanco / Verde neón"

    },
    {
        id: 133,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "133.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 134,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "134.webp",
        descripcion: "Negro total"

    },
    {
        id: 135,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "135.webp",
        descripcion: "Negro / Blanco / Rojo"

    },
    {
        id: 136,
        nombre: "Adidas Adistar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "136.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 137,
        nombre: "Diesel S-Tyche",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "137.webp",
        descripcion: "Negro / Azul / Rojo / Blanco"

    },
    {
        id: 138,
        nombre: "Diesel S-Tyche",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "138.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 139,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "139.webp",
        descripcion: "Blanco / Azul navy"

    },
    {
        id: 140,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "140.webp",
        descripcion: "Blanco / Negro / Café"

    },
    {
        id: 141,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "141.webp",
        descripcion: "Crema / Verde teal / Naranja"

    },
    {
        id: 142,
        nombre: "Adidas Handball Spezial",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "142.webp",
        descripcion: "Rojo / Blanco / Gum"

    },
    {
        id: 143,
        nombre: "Adidas Pureboost / RunFalcon",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "143.webp",
        descripcion: "Blanco / Turquesa"

    },
    {
        id: 144,
        nombre: "Adidas Pureboost / RunFalcon",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "144.webp",
        descripcion: "Blanco / Azul rey / Rojo"

    },
    {
        id: 145,
        nombre: "Air Jordan Jordan 12 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "145.webp",
        descripcion: "Negro / Dorado ("

    },
    {
        id: 146,
        nombre: "Air Jordan Jordan 6 Rings",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "146.webp",
        descripcion: "Negro / Rojo / Blanco ("

    },
    {
        id: 147,
        nombre: "Air Jordan Jordan 12 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "147.webp",
        descripcion: "Negro / Blanco / Gris ("

    },
    {
        id: 148,
        nombre: "Air Jordan Jordan 11 Retro",
        precio: "$250.000",
        marca: "Air Jordan",
        imagen: "148.webp",
        descripcion: "Blanco / Negro ("

    },
    {
        id: 149,
        nombre: "Nike Air Zoom Terra Kiger / Wildhorse",
        precio: "$250.000",
        marca: "Nike",
        imagen: "149.webp",
        descripcion: "Negro / Gris / Blanco"

    },
    {
        id: 150,
        nombre: "Skechers Slip-ins Elite / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "150.webp",
        descripcion: "Blanco total / Negro"

    },
    {
        id: 151,
        nombre: "Skechers Slip-ins Elite / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "151.webp",
        descripcion: "Blanco / Suela multicolor"

    },
    {
        id: 152,
        nombre: "Skechers GO Run Arch Fit / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "152.webp",
        descripcion: "Blanco / Suela multicolor"

    },
    {
        id: 153,
        nombre: "Skechers GO Run / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "153.webp",
        descripcion: "Azul marino / Lila / Menta"

    },
    {
        id: 154,
        nombre: "Skechers GO Run / Carbon Infused",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "154.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 155,
        nombre: "Converse Chuck Taylor All Star Hi",
        precio: "$250.000",
        marca: "Converse",
        imagen: "155.webp",
        descripcion: "Crema / Gris azul"

    },
    {
        id: 156,
        nombre: "Diesel S-Serendipity / S-Leroji",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "156.webp",
        descripcion: "Negro / Rojo"

    },
    {
        id: 157,
        nombre: "Nike P-6000",
        precio: "$250.000",
        marca: "Nike",
        imagen: "157.webp",
        descripcion: "Gris / Azul marino / Azul cielo"

    },
    {
        id: 158,
        nombre: "Nike P-6000",
        precio: "$250.000",
        marca: "Nike",
        imagen: "158.webp",
        descripcion: "Blanco / Crema / Gum"

    },
    {
        id: 159,
        nombre: "Nike P-6000",
        precio: "$250.000",
        marca: "Nike",
        imagen: "159.webp",
        descripcion: "Blanco / Verde oliva / Kaki"

    },
    {
        id: 160,
        nombre: "Nike Vomero 5",
        precio: "$250.000",
        marca: "Nike",
        imagen: "160.webp",
        descripcion: "Beige / Azul marino / Marrón gum"

    },
    {
        id: 161,
        nombre: "Nike Vomero 5",
        precio: "$250.000",
        marca: "Nike",
        imagen: "161.webp",
        descripcion: "Camel / Beige / Crema"

    },
    {
        id: 162,
        nombre: "Nike Air ZoomX / Zoom Running",
        precio: "$250.000",
        marca: "Nike",
        imagen: "162.webp",
        descripcion: "Azul marino / Blanco / Negro"

    },
    {
        id: 163,
        nombre: "Nike Air ZoomX Running",
        precio: "$250.000",
        marca: "Nike",
        imagen: "163.webp",
        descripcion: "Verde oliva / Blanco / Negro"

    },
    {
        id: 164,
        nombre: "Nike Air ZoomX Running",
        precio: "$250.000",
        marca: "Nike",
        imagen: "164.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 165,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "165.webp",
        descripcion: "Blanco / Azul acero / Negro"

    },
    {
        id: 166,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "166.webp",
        descripcion: "Gris claro / Gris oscuro / Blanco"

    },
    {
        id: 167,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "167.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 168,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "168.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 169,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "169.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 170,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "170.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 171,
        nombre: "Adidas Predator Elite SG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "171.webp",
        descripcion: "Blanco / Plateado / Azul / Rojo"

    },
    {
        id: 172,
        nombre: "Adidas Predator Elite SG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "172.webp",
        descripcion: "Negro / Blanco plateado / Menta"

    },
    {
        id: 173,
        nombre: "Nike Mercurial Vapor XV Elite SG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "173.webp",
        descripcion: "Marrón / Plateado / Verde neón"

    },
    {
        id: 174,
        nombre: "Adidas F50 Elite FG / X Crazyfast",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "174.webp",
        descripcion: "Blanco / Teal / Rojo / Amarillo"

    },
    {
        id: 175,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "175.webp",
        descripcion: "Rojo / Blanco plateado / Negro"

    },
    {
        id: 176,
        nombre: "Nike Street Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "176.webp",
        descripcion: "Amarillo / Blanco / Gum"

    },
    {
        id: 177,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "177.webp",
        descripcion: "Amarillo neón / Verde / Naranja"

    },
    {
        id: 178,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "178.webp",
        descripcion: "Plateado / Multicolor knit / Verde"

    },
    {
        id: 179,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "179.webp",
        descripcion: "Blanco / Azul / Negro / Amarillo"

    },
    {
        id: 180,
        nombre: "Nike Mercurial Vapor XV Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "180.webp",
        descripcion: "Negro / Verde neón"

    },
    {
        id: 181,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "181.webp",
        descripcion: "Blanco / Negro / Azul cielo / Amarillo"

    },
    {
        id: 182,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "182.webp",
        descripcion: "Blanco / Rojo / Negro"

    },
    {
        id: 183,
        nombre: "Adidas Predator Elite FG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "183.webp",
        descripcion: "Blanco / Negro / Azul cielo"

    },
    {
        id: 184,
        nombre: "Nike Phantom GX II Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "184.webp",
        descripcion: "Crema / Vino / Negro / Blanco"

    },
    {
        id: 185,
        nombre: "Nike Mercurial Superfly IX Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "185.webp",
        descripcion: "Blanco / Menta / Rosa / Rojo"

    },
    {
        id: 186,
        nombre: "Nike Mercurial Superfly IX Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "186.webp",
        descripcion: "Rosa coral / Azul cielo / Plateado"

    },
    {
        id: 187,
        nombre: "Nike Mercurial Vapor XVI Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "187.webp",
        descripcion: "Lila / Amarillo neón"

    },
    {
        id: 188,
        nombre: "Nike Mercurial Vapor XVI Elite FG",
        precio: "$250.000",
        marca: "Nike",
        imagen: "188.webp",
        descripcion: "Rojo-naranja / Rosa / Azul cielo"

    },
    {
        id: 189,
        nombre: "Adidas X Crazyfast TF / Dembélé",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "189.webp",
        descripcion: "Azul marino / Dorado"

    },
    {
        id: 190,
        nombre: "Nike Mercurial Vapor XV TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "190.webp",
        descripcion: "Plateado / Multicolor / Verde"

    },
    {
        id: 191,
        nombre: "Adidas X Crazyfast / Messi TF",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "191.webp",
        descripcion: "Azul rey / Amarillo neón / Blanco"

    },
    {
        id: 192,
        nombre: "Adidas F50 League TF",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "192.webp",
        descripcion: "Verde neón total / Negro"

    },
    {
        id: 193,
        nombre: "Nike Mercurial Superfly VI TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "193.webp",
        descripcion: "Naranja total / Dorado / Negro"

    },
    {
        id: 194,
        nombre: "Nike Mercurial Superfly IX Elite TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "194.webp",
        descripcion: "Lila / Gris / Rosa / Plateado"

    },
    {
        id: 195,
        nombre: "Nike Mercurial Superfly IX Elite TF",
        precio: "$250.000",
        marca: "Nike",
        imagen: "195.webp",
        descripcion: "Vino / Crema / Negro / Plateado"

    },
    {
        id: 196,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "196.webp",
        descripcion: "Negro / Verde neón / Blanco"

    },
    {
        id: 197,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "197.webp",
        descripcion: "Amarillo / Negro / Blanco"

    },
    {
        id: 198,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "198.webp",
        descripcion: "Gris / Azul / Negro / Verde neón"

    },
    {
        id: 199,
        nombre: "Nike LunarGato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "199.webp",
        descripcion: "Amarillo neón / Negro / Blanco"

    },
    {
        id: 200,
        nombre: "Nike / Supreme SB Gato IC",
        precio: "$250.000",
        marca: "Nike / Supreme",
        imagen: "200.webp",
        descripcion: "Rojo / Naranja / Blanco / Gum"

    },
    {
        id: 201,
        nombre: "Nike SB Gato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "201.webp",
        descripcion: "Azul rey / Amarillo"

    },
    {
        id: 202,
        nombre: "Nike SB Gato IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "202.webp",
        descripcion: "Negro / Blanco / Amarillo"

    },
    {
        id: 203,
        nombre: "Nike SB Gato II IC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "203.webp",
        descripcion: "Azul / Rojo / Marino / Blanco"

    },
    {
        id: 204,
        nombre: "Nike / Supreme SB Gato IC",
        precio: "$250.000",
        marca: "Nike / Supreme",
        imagen: "204.webp",
        descripcion: "Negro / Rosa / Teal / Gum"

    },
    {
        id: 205,
        nombre: "Fila Upgr8 / Regoletto",
        precio: "$250.000",
        marca: "Fila",
        imagen: "205.webp",
        descripcion: "Blanco / Gris / Azul marino / Menta"

    },
    {
        id: 206,
        nombre: "Fila Upgr8 / Regoletto",
        precio: "$250.000",
        marca: "Fila",
        imagen: "206.webp",
        descripcion: "Blanco / Gris claro / Azul marino / Menta"

    },
    {
        id: 207,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "207.webp",
        descripcion: "Negro total"

    },
    {
        id: 208,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "208.webp",
        descripcion: "Azul rey / Azul cielo / Blanco / Teal"

    },
    {
        id: 209,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "209.webp",
        descripcion: "Azul cielo / Lila / Blanco"

    },
    {
        id: 210,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "210.webp",
        descripcion: "Negro total / Plateado reflectante"

    },
    {
        id: 211,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "211.webp",
        descripcion: "Blanco / Rosa / Gris / Lila"

    },
    {
        id: 212,
        nombre: "Nike Air Max Plus (TN)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "212.webp",
        descripcion: "Blanco / Rosa / Gris"

    },
    {
        id: 213,
        nombre: "Adidas Terrex Free Hiker GTX",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "213.webp",
        descripcion: "Negro total / Gum"

    },
    {
        id: 214,
        nombre: "Nike / Jordan Kyrie 4",
        precio: "$250.000",
        marca: "Nike / Jordan",
        imagen: "214.webp",
        descripcion: "Negro total / Multicolor suela"

    },
    {
        id: 215,
        nombre: "Lacoste L003 Neo / Joggeur",
        precio: "$250.000",
        marca: "Lacoste",
        imagen: "215.webp",
        descripcion: "Blanco / Azul rey / Rojo / Plateado"

    },
    {
        id: 216,
        nombre: "Puma California",
        precio: "$250.000",
        marca: "Puma",
        imagen: "216.webp",
        descripcion: "Crema / Azul marino"

    },
    {
        id: 217,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "217.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 218,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "218.webp",
        descripcion: "Negro / Blanco / Rojo"

    },
    {
        id: 219,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "219.webp",
        descripcion: "Blanco / Negro / Gum dorado"

    },
    {
        id: 220,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "220.webp",
        descripcion: "Negro / Gris / Plateado"

    },
    {
        id: 221,
        nombre: "Nike Zoom Fly / Pegasus Premium",
        precio: "$250.000",
        marca: "Nike",
        imagen: "221.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 222,
        nombre: "Skechers D'Lux Journey",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "222.webp",
        descripcion: "Gris / Azul marino / Crema / Neón amarillo"

    },
    {
        id: 223,
        nombre: "Puma California",
        precio: "$250.000",
        marca: "Puma",
        imagen: "223.webp",
        descripcion: "Negro / Gris / Blanco / Rojo"

    },
    {
        id: 224,
        nombre: "Tommy Hilfiger / Tommy Jeans Cupsole Sneaker / Essential",
        precio: "$250.000",
        marca: "Tommy Hilfiger / Tommy Jeans",
        imagen: "224.webp",
        descripcion: "Blanco / Azul marino / Rojo"

    },
    {
        id: 225,
        nombre: "Tommy Hilfiger Essential Cupsole",
        precio: "$250.000",
        marca: "Tommy Hilfiger",
        imagen: "225.webp",
        descripcion: "Blanco total"

    },
    {
        id: 226,
        nombre: "Tommy Hilfiger Essential Cupsole",
        precio: "$250.000",
        marca: "Tommy Hilfiger",
        imagen: "226.webp",
        descripcion: "Blanco / Negro"

    },
    {
        id: 227,
        nombre: "Tommy Hilfiger Essential Cupsole",
        precio: "$250.000",
        marca: "Tommy Hilfiger",
        imagen: "227.webp",
        descripcion: "Blanco total"

    },
    {
        id: 228,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "228.webp",
        descripcion: "Negro / Wheat / Blanco"

    },
    {
        id: 229,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "229.webp",
        descripcion: "Negro total"

    },
    {
        id: 230,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "230.webp",
        descripcion: "Wheat / Azul marino"

    },
    {
        id: 231,
        nombre: "Timberland Sprint Trekker Mid",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "231.webp",
        descripcion: "Negro / Wheat / Blanco"

    },
    {
        id: 232,
        nombre: "New Balance 574 (Cordura)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "232.webp",
        descripcion: "Gris / Azul pizarra / Verde oliva / Blanco"

    },
    {
        id: 233,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "233.webp",
        descripcion: "Crema / Azul marino / Gum rosa"

    },
    {
        id: 234,
        nombre: "New Balance 574 (Cordura)",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "234.webp",
        descripcion: "Kaki / Azul pizarra / Blanco"

    },
    {
        id: 235,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "235.webp",
        descripcion: "Azul marino / Rojo / Gris / Gum"

    },
    {
        id: 236,
        nombre: "Adidas Terrex Free Hiker GTX",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "236.webp",
        descripcion: "Negro total"

    },
    {
        id: 237,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "237.webp",
        descripcion: "Negro / Gris / Naranja / Crema"

    },
    {
        id: 238,
        nombre: "Nike Pegasus Trail ATC",
        precio: "$250.000",
        marca: "Nike",
        imagen: "238.webp",
        descripcion: "Blanco / Gris / Negro / Gum"

    },
    {
        id: 239,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "239.webp",
        descripcion: "Negro / Blanco / Lila / Verde oliva"

    },
    {
        id: 240,
        nombre: "Nike Free Metcon 6",
        precio: "$250.000",
        marca: "Nike",
        imagen: "240.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 241,
        nombre: "Nike Free Metcon 6",
        precio: "$250.000",
        marca: "Nike",
        imagen: "241.webp",
        descripcion: "Blanco total"

    },
    {
        id: 242,
        nombre: "Nike Air ZoomX / Zoom Fly",
        precio: "$250.000",
        marca: "Nike",
        imagen: "242.webp",
        descripcion: "Blanco / Marino / Crema +"

    },
    {
        id: 243,
        nombre: "Nike ZoomX (Running)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "243.webp",
        descripcion: "Blanco / Turquesa"

    },
    {
        id: 244,
        nombre: "Nike ZoomX (Running)",
        precio: "$250.000",
        marca: "Nike",
        imagen: "244.webp",
        descripcion: "Blanco / Verde neón"

    },
    {
        id: 245,
        nombre: "Adidas Campus 00s",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "245.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 246,
        nombre: "Armani Exchange AX Runner",
        precio: "$250.000",
        marca: "Armani Exchange",
        imagen: "246.webp",
        descripcion: "Negro / Gris plata"

    },
    {
        id: 247,
        nombre: "Skechers Max Protect",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "247.webp",
        descripcion: "Negro / Gris"

    },
    {
        id: 248,
        nombre: "Skechers Max Protect Waterproof",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "248.webp",
        descripcion: "Azul marino / Gris"

    },
    {
        id: 249,
        nombre: "Skechers Max Protect",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "249.webp",
        descripcion: "Verde oliva / Negro"

    },
    {
        id: 250,
        nombre: "Puma Palermo",
        precio: "$250.000",
        marca: "Puma",
        imagen: "250.webp",
        descripcion: "Blanco / Beige / Crema"

    },
    {
        id: 251,
        nombre: "Puma Palermo",
        precio: "$250.000",
        marca: "Puma",
        imagen: "251.webp",
        descripcion: "Blanco / Negro / Crema"

    },
    {
        id: 252,
        nombre: "Skechers Go Run Elevate",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "252.webp",
        descripcion: "Negro / Rosa fucsia"

    },
    {
        id: 253,
        nombre: "Skechers Go Run Elevate",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "253.webp",
        descripcion: "Blanco / Menta / Azul lavanda"

    },
    {
        id: 254,
        nombre: "Timberland 6-Inch Premium Boot",
        precio: "$250.000",
        marca: "Timberland",
        imagen: "254.webp",
        descripcion: "Trigo / Negro"

    },
    {
        id: 255,
        nombre: "Hugo Boss BOSS Runner",
        precio: "$250.000",
        marca: "Hugo Boss",
        imagen: "255.webp",
        descripcion: "Gris oscuro / Gris claro"

    },
    {
        id: 256,
        nombre: "Adidas Adizero",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "256.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 257,
        nombre: "Adidas Pureboost / EQ21",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "257.webp",
        descripcion: "Negro / Gris plata"

    },
    {
        id: 258,
        nombre: "Skechers ArchFit (Bobs)",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "258.webp",
        descripcion: "Negro total"

    },
    {
        id: 259,
        nombre: "Skechers UltraLight Slip-On",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "259.webp",
        descripcion: "Negro total"

    },
    {
        id: 260,
        nombre: "Skechers Max Cushion",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "260.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 261,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "261.webp",
        descripcion: "Negro / Naranja"

    },
    {
        id: 262,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "262.webp",
        descripcion: "Rojo / Blanco"

    },
    {
        id: 263,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "263.webp",
        descripcion: "Camel / Crema"

    },
    {
        id: 264,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "264.webp",
        descripcion: "Negro / Salmon/Rosa"

    },
    {
        id: 265,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "265.webp",
        descripcion: "Rojo / Burdeos"

    },
    {
        id: 266,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "266.webp",
        descripcion: "Negro / Gris"

    },
    {
        id: 267,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "267.webp",
        descripcion: "Negro / Gris"

    },
    {
        id: 268,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "268.webp",
        descripcion: "Negro / Blanco dorado"

    },
    {
        id: 269,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "269.webp",
        descripcion: "Gris / Blanco / Lila"

    },
    {
        id: 270,
        nombre: "Puma ST Runner",
        precio: "$250.000",
        marca: "Puma",
        imagen: "270.webp",
        descripcion: "Blanco / Azul cielo"

    },
    {
        id: 271,
        nombre: "Nike SB Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "271.webp",
        descripcion: "Gris / Azul petróleo"

    },
    {
        id: 272,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "272.webp",
        descripcion: "Blanco / Salmón/Melocotón"

    },
    {
        id: 273,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "273.webp",
        descripcion: "Blanco / Azul universitario"

    },
    {
        id: 274,
        nombre: "On Running Cloudultra / Cloudsurfer",
        precio: "$250.000",
        marca: "On Running",
        imagen: "274.webp",
        descripcion: "Blanco menta / Gris / Naranja"

    },
    {
        id: 275,
        nombre: "Adidas Grand Court",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "275.webp",
        descripcion: "Blanco / Negro"

    },
    {
        id: 276,
        nombre: "Vans Lowland CC",
        precio: "$250.000",
        marca: "Vans",
        imagen: "276.webp",
        descripcion: "Azul marino / Gris / Salmón"

    },
    {
        id: 277,
        nombre: "New Balance 530",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "277.webp",
        descripcion: "Blanco / Plata / Azul"

    },
    {
        id: 278,
        nombre: "Adidas Yeezy Boost 350 V2",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "278.webp",
        descripcion: "Negro total ("

    },
    {
        id: 279,
        nombre: "Adidas Yeezy Boost 350 V2",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "279.webp",
        descripcion: "Blanco / Gris ("

    },
    {
        id: 280,
        nombre: "Adidas Yeezy Boost 350 V2",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "280.webp",
        descripcion: "Gris bicolor ("

    },
    {
        id: 281,
        nombre: "Hoka Speedgoat 5",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "281.webp",
        descripcion: "Gris camo / Oliva / Amarillo"

    },
    {
        id: 282,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "282.webp",
        descripcion: "Azul grisáceo / Naranja"

    },
    {
        id: 283,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "283.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 284,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "284.webp",
        descripcion: "Gris / Blanco"

    },
    {
        id: 285,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "285.webp",
        descripcion: "Azul navy / Rojo / Amarillo"

    },
    {
        id: 286,
        nombre: "Hoka Clifton 9",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "286.webp",
        descripcion: "Verde oliva / Crema"

    },
    {
        id: 287,
        nombre: "Hoka Speedgoat 5 Trail",
        precio: "$250.000",
        marca: "Hoka",
        imagen: "287.webp",
        descripcion: "Negro / Blanco / Gris moteado"

    },
    {
        id: 288,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "288.webp",
        descripcion: "Blanco / Gris / Azul / Lila"

    },
    {
        id: 289,
        nombre: "Le Coq Sportif Racerone",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "289.webp",
        descripcion: "Negro / Lila"

    },
    {
        id: 290,
        nombre: "Le Coq Sportif Veloce",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "290.webp",
        descripcion: "Negro / Lila"

    },
    {
        id: 291,
        nombre: "Le Coq Sportif R500",
        precio: "$250.000",
        marca: "Le Coq Sportif",
        imagen: "291.webp",
        descripcion: "Rosa palo / Burdeos / Crema"

    },
    {
        id: 292,
        nombre: "On Running Cloudtechase",
        precio: "$250.000",
        marca: "On Running",
        imagen: "292.webp",
        descripcion: "Negro / Gris / Blanco"

    },
    {
        id: 293,
        nombre: "On Running Cloudtechase",
        precio: "$250.000",
        marca: "On Running",
        imagen: "293.webp",
        descripcion: "Azul cielo / Gris oscuro / Naranja"

    },
    {
        id: 294,
        nombre: "Adidas Response CL / Spiritain",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "294.webp",
        descripcion: "Blanco / Gris / Negro"

    },
    {
        id: 295,
        nombre: "Adidas Response CL / Spiritain",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "295.webp",
        descripcion: "Negro / Gris / Blanco"

    },
    {
        id: 296,
        nombre: "Adidas Samba OG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "296.webp",
        descripcion: "Blanco / Rosa nude"

    },
    {
        id: 297,
        nombre: "Adidas Superstar",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "297.webp",
        descripcion: "Blanco / Verde"

    },
    {
        id: 298,
        nombre: "Nike Air Max BW",
        precio: "$250.000",
        marca: "Nike",
        imagen: "298.webp",
        descripcion: "Gris / Azul cielo / Negro / Rojo"

    },
    {
        id: 299,
        nombre: "Louis Vuitton LV Skate Sneaker",
        precio: "$250.000",
        marca: "Louis Vuitton",
        imagen: "299.webp",
        descripcion: "Blanco / Negro"

    },
    {
        id: 300,
        nombre: "Puma Park Lifestyle",
        precio: "$250.000",
        marca: "Puma",
        imagen: "300.webp",
        descripcion: "Beige / Blanco / Gum"

    },
    {
        id: 301,
        nombre: "Nike SB Dunk Low × UNLA",
        precio: "$250.000",
        marca: "Nike",
        imagen: "301.webp",
        descripcion: "Verde menta / Gris / Azul navy"

    },
    {
        id: 302,
        nombre: "Nike SB Dunk Low × UNLA",
        precio: "$250.000",
        marca: "Nike",
        imagen: "302.webp",
        descripcion: "Verde menta / Gris / Azul"

    },
    {
        id: 303,
        nombre: "On Running Cloudmonster",
        precio: "$250.000",
        marca: "On Running",
        imagen: "303.webp",
        descripcion: "Azul navy / Verde neón"

    },
    {
        id: 304,
        nombre: "Adidas Response 3.0 / Spiritain",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "304.webp",
        descripcion: "Negro total / Plata"

    },
    {
        id: 305,
        nombre: "On Running Cloudtechase",
        precio: "$250.000",
        marca: "On Running",
        imagen: "305.webp",
        descripcion: "Blanco total / Gum"

    },
    {
        id: 306,
        nombre: "Nike Air Force 1 Low Custom",
        precio: "$250.000",
        marca: "Nike",
        imagen: "306.webp",
        descripcion: "Blanco / Floral japonés"

    },
    {
        id: 307,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "307.webp",
        descripcion: "Blanco / Swoosh outline rosa + menta"

    },
    {
        id: 308,
        nombre: "Nike × BAPE Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike × BAPE",
        imagen: "308.webp",
        descripcion: "Crema / Azul navy"

    },
    {
        id: 309,
        nombre: "Nike Air Force 1 Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "309.webp",
        descripcion: "Blanco / Marrón chocolate"

    },
    {
        id: 310,
        nombre: "Diesel S-Serendipity",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "310.webp",
        descripcion: "Verde oliva / Gris / Negro / Naranja"

    },
    {
        id: 311,
        nombre: "Diesel S-Serendipity",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "311.webp",
        descripcion: "Azul denim / Gris / Blanco"

    },
    {
        id: 312,
        nombre: "Diesel S-Serendipity",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "312.webp",
        descripcion: "Negro total / Gum"

    },
    {
        id: 313,
        nombre: "Diesel S-Athos",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "313.webp",
        descripcion: "Gris / Negro"

    },
    {
        id: 314,
        nombre: "Diesel S-Athos",
        precio: "$250.000",
        marca: "Diesel",
        imagen: "314.webp",
        descripcion: "Negro / Gum"

    },
    {
        id: 315,
        nombre: "Adidas Samba OG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "315.webp",
        descripcion: "Blanco / Negro / Naranja"

    },
    {
        id: 316,
        nombre: "Adidas Drop Step",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "316.webp",
        descripcion: "Crema / Lila"

    },
    {
        id: 317,
        nombre: "New Balance 574",
        precio: "$250.000",
        marca: "New Balance",
        imagen: "317.webp",
        descripcion: "Blanco total / Gum"

    },
    {
        id: 318,
        nombre: "Adidas Response / Terrex",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "318.webp",
        descripcion: "Gris claro / Verde neón"

    },
    {
        id: 319,
        nombre: "Reebok GL 6000",
        precio: "$250.000",
        marca: "Reebok",
        imagen: "319.webp",
        descripcion: "Gris / Azul / Lila"

    },
    {
        id: 320,
        nombre: "Vans Knu-Skool",
        precio: "$250.000",
        marca: "Vans",
        imagen: "320.webp",
        descripcion: "Negro / Blanco"

    },
    {
        id: 321,
        nombre: "Vans Style 36",
        precio: "$250.000",
        marca: "Vans",
        imagen: "321.webp",
        descripcion: "Negro / Crema"

    },
    {
        id: 322,
        nombre: "Nike V2K Run",
        precio: "$250.000",
        marca: "Nike",
        imagen: "322.webp",
        descripcion: "Blanco / Azul rey / Gris"

    },
    {
        id: 323,
        nombre: "Nike Dunk Low",
        precio: "$250.000",
        marca: "Nike",
        imagen: "323.webp",
        descripcion: "Blanco / Negro ("

    },
    {
        id: 324,
        nombre: "Skechers Go Run Slip-In",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "324.webp",
        descripcion: "Negro / Blanco / Lila"

    },
    {
        id: 325,
        nombre: "Skechers Go Run Slip-In",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "325.webp",
        descripcion: "Gris / Blanco / Rosa"

    },
    {
        id: 326,
        nombre: "Nike Air Max 90 × Cordura",
        precio: "$250.000",
        marca: "Nike",
        imagen: "326.webp",
        descripcion: "Verde oliva / Amarillo"

    },
    {
        id: 327,
        nombre: "Nike Air Max 90",
        precio: "$250.000",
        marca: "Nike",
        imagen: "327.webp",
        descripcion: "Negro / Gris / Turquesa"

    },
    {
        id: 328,
        nombre: "Adidas Samba OG",
        precio: "$250.000",
        marca: "Adidas",
        imagen: "328.webp",
        descripcion: "Blanco / Negro / Gum"

    },
    {
        id: 329,
        nombre: "Skechers GoWalk Outdoor",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "329.webp",
        descripcion: "Café / Gris / Negro"

    },
    {
        id: 330,
        nombre: "Skechers GoWalk Outdoor",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "330.webp",
        descripcion: "Azul navy / Gris / Naranja"

    },
    {
        id: 331,
        nombre: "Skechers GoWalk Outdoor",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "331.webp",
        descripcion: "Negro / Gris"

    },
    {
        id: 332,
        nombre: "Skechers EdgeRide BOA",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "332.webp",
        descripcion: "Negro total"

    },
    {
        id: 333,
        nombre: "Skechers Distance Walker",
        precio: "$250.000",
        marca: "Skechers",
        imagen: "333.webp",
        descripcion: "Negro / Gris"

    }
];
