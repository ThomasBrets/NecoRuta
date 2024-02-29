// import images
import Img2 from "./src/assets/img/2.jpg"; //Alimento
import Img5 from "./src/assets/img/5.jpg"; //Sebo Liquido
import Img6 from "./src/assets/img/6.jpg"; //Fertil
import Img9 from "./src/assets/img/9.jpg"; //Cereal
import Img10 from "./src/assets/img/10.jpg"; //Sebo

const transportData = [
    {
        id: 1,
        name: "Rendering",
        description: "Transporte de subproductos animales (desechos), grasas y proteínas, a planta de reciclaje.",
        img: Img10
    },
    {
        id: 2,
        name: "Cereal",
        description: "Transporte de carga de Cereal desde campo a planta y/o puerto. Transporte de semillas de planta a campo.",
        img: Img9
    },
    {
        id: 3,
        name: "Fertilizantes",
        description: "Transporte de distintos Fertilizantes solidos y liquidos desde planta a campo y/o puerto.",
        img: Img6
    },
    {
        id: 4,
        name: "Alimento",
        description: "Transporte de Alimento Balanceado para Ganado, a granel o paletizado en bolsa, desde planta a campo.",
        img: Img2
    },
    {
        id: 5,
        name: "Sebo Liquido y Harina",
        description: "Transporte de Sebo Liquido y de Harinas de hueso, carne, de planta a campo y/o planta.",
        img: Img5
    },
]

export default transportData