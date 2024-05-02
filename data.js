// import images
import Img2 from "./src/assets/img/2.jpg"; //Alimento
import Img5 from "./src/assets/img/5.jpg"; //Sebo Liquido
import Img6 from "./src/assets/img/6.jpg"; //Fertil
import Img9 from "./src/assets/img/9.jpg"; //Cereal
import Img10 from "./src/assets/img/10.jpg"; //Sebo

// import Icons
import { FaMapMarkerAlt } from "react-icons/fa";




// ? Transport

export const transportData = [
  {
    id: 1,
    name: "Sebo",
    description:
      "Transporte de subproductos animales (desechos), grasas y proteínas, a planta de reciclaje.",
    img: Img10,
  },
  {
    id: 2,
    name: "Cereal",
    description:
      "Transporte de carga de Cereal desde campo a planta y/o puerto. Transporte de semillas de planta a campo.",
    img: Img9,
  },
  {
    id: 3,
    name: "Fertilizantes",
    description:
      "Transporte de distintos Fertilizantes solidos y liquidos desde planta a campo y/o puerto.",
    img: Img6,
  },
  {
    id: 4,
    name: "Alimento",
    description:
      "Transporte de Alimento Balanceado para Ganado, a granel o paletizado en bolsa, desde planta a campo.",
    img: Img2,
  },
  {
    id: 5,
    name: "Sebo Liquido y Harina",
    description:
      "Transporte de Sebo Liquido y de Harinas de hueso, carne, de planta a campo y/o planta.",
    img: Img5,
  },
];


// ? Office 

export const officeData = {
  id: 1,
  direccion: "Calle 39 Nº 3545",
  ciudad: "Necochea - CP 7630",
  provincia: "Pcia. Buenos Aires",
  email: "transporte@necoruta.com.ar",
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
