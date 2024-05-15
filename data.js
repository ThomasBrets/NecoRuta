// import images
import Img2 from "./src/assets/img/2.jpg"; //Alimento
import Img5 from "./src/assets/img/5.jpg"; //Sebo Liquido
import Img6 from "./src/assets/img/6.jpg"; //Fertil
import Img12 from "./src/assets/img/12.jpg"; //Cereal
import Img16 from "./src/assets/img/16.jpg"; //Sebo 
import Img14 from "./src/assets/img/14.jpg"; //Fertil
import Img15 from "./src/assets/img/15.jpg"; //Sebo Liquido



// import Icons
import { FaMapMarkerAlt } from "react-icons/fa";




// ? Transport

export const transportData = [
  {
    id: 1,
    name: "Sebo",
    description:
      "Transporte de subproductos animales (desechos) a Planta de reciclaje. RENDERING",
    img: Img16,
  },
  {
    id: 2,
    name: "Sebo Liquido",
    description:
      "Transporte de sebo liquido",
    img: Img5,
  },
  {
    id: 3,
    name: "Harina de hueso y Carne",
    description:
      "Transporte de harina de hueso y carne de Planta recicladora directo al cliente.",
    img: Img15,
  },
  {
    id: 4,
    name: "Alimento",
    description:
      "Transporte de Alimento Balanceado a granel o paletizado en bolsas, desde Planta a Campo.",
    img: Img2,
  },
  {
    id: 5,
    name: "Cereal",
    description:
      "Transporte de cereal desde Campo a Planta o Puerto",
    img: Img12,
  },
  {
    id: 6,
    name: "Semilla",
    description:
      "Transporte de semillas, paletizado o autodescargable de Planta o Campo",
    img: Img14,
  },
  {
    id: 7,
    name: "Fertilizante",
    description:
      "Transporte de fertilizante líquido y sólido desde Planta o Puerto al Campo.",
    img: Img6,
  },
];


// ? Office 

export const officeData = {
  id: 1,
  direccion: "Calle 39 Nº 3545",
  ciudad: "Necochea - CP 7630", 
  provincia: "Pcia. Buenos Aires",
  email: "transportes@necoruta.com.ar",
  logistica: "logística: +54 9 2262 645904",
  administracion: "administración: +54 9 2262 589166",
};


// ? Map

export const markersData = [
  {
    geocode: [-38.90042564777297, -70.06608765063329],
    popUp: "Zapala",
  },
  {
    geocode: [-38.93392355612468, -69.22976038579242],
    popUp: "Cutral-Co",
  },
  {
    geocode: [-39.00999955458048, -68.42779282168438],
    popUp: "Senillosa",
  },
  {
    geocode: [-39.01847850314837, -67.63537242085441],
    popUp: "JJ Gomez",
  },
  {
    geocode: [-40.81332483749995, -62.99842416592252],
    popUp: "Viedma",
  },
  {
    geocode: [-38.718521980311316, -62.26599034760898],
    popUp: "Bahia Blanca",
  },
  {
    geocode: [-37.15039221763724, -58.483567272096884],
    popUp: "Ayacucho",
  },
  {
    geocode: [-38.961522104521826, -68.08939928909031],
    popUp: "Luis Beltran",
  },
  {
    geocode: [-38.37780577671603, -60.275289555540134],
    popUp: "Tres Arroyos",
  },
  {
    geocode: [-34.60893149753184, -58.41203297320476],
    popUp: "Buenos Aires",
  },
  {
    geocode: [-40.04814582373338, -70.07581790314968],
    popUp: "Piedra del Aguila",
  },
  {
    geocode: [-43.248116757954335, -65.30997229066051],
    popUp: "Trelew",
  },
  {
    geocode: [-43.28959716254637, -65.4914744874232],
    popUp: "Gaiman",
  },
  {
    geocode: [-38.95120453173908, -68.06163257069657],
    popUp: "Neuquen",
  },
  {
    geocode: [-35.810403587564956, -61.898731144527645],
    popUp: "Pehuajo",
  },
  {
    geocode: [-37.98436841483238, -61.35140254196462],
    popUp: "Coronel Pringles",
  },
  {
    geocode: [-41.32961652099136, -69.54733811175099],
    popUp: "Jacobacci",
  },
  {
    geocode: [-40.10385433436149, -64.45868360543507],
    popUp: "General Conesa",
  },
];

export const necorutaData = [
  {
    geocode: [-38.53959801854269, -58.739152049042524],
    popUp: "Necoruta",
  },
];
