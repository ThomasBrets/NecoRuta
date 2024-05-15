import React, { useContext, useState, useEffect } from "react";

import "../map.css";

// react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Leaflet
import { Icon, DivIcon, point } from "leaflet";

// react-lealfet-cluster
import MarkerClusterGroup from "react-leaflet-cluster";

// img
import RoundLogo from "../assets/logo/roundLogo.png";
import transparentLogo from "../assets/logo/transparentLogo.png";

// Context
import { transportContext } from "../context/transportContext";

// react-icons
import { HiMenuAlt3 } from "react-icons/hi";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbNavigationNorth } from "react-icons/tb";

// react-router-dom
import { Link } from "react-router-dom";

const customIcon = new Icon({
  iconUrl: RoundLogo,
  iconSize: [55, 55], //Size of the icon
});

const createCustomClusterIcon = (cluster) => {
  return new DivIcon({
    html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

const Map = () => {
  const [open, setOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState([
    -38.539686161180306, -58.73908767116438,
  ]);
  const [zoom, setZoom] = useState(6);
  const [mapKey, setMapKey] = useState(0); // Agregar un estado para forzar la actualización de MapContainer
  const [showAlert, setShowAlert] = useState(true); // Estado para controlar la visibilidad del cartel
  const { markers, necoruta } = useContext(transportContext);
  // console.log("MARKERS", markers);
  // console.log("NECORUTA", necoruta);
  // [-40.10385433436149, -64.45868360543507]
  // [-38.539686161180306, -58.73908767116438]

  const handleCityClick = (location) => {
    // console.log("Clicked Location:", location);
    setMapCenter(location); // Establece directamente el nuevo centro del mapa al hacer clic en una ciudad
    setZoom(14); // Establece el zoom deseado al hacer clic en una ciudad
    setMapKey(mapKey + 1); // Incrementa el valor de mapKey para forzar la actualización de MapContainer
  };

  // console.log("MAPCENTER", mapCenter);

  useEffect(() => {
    // Mostrar el cartel informativo al cargar el componente por primera vez
    setShowAlert(true);
  }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

  const closeAlert = () => {
    // Función para cerrar el cartel
    setShowAlert(false);
  };

  return (
    <div className="flex flex-row z-10 relative">
      {showAlert && ( // Mostrar el cartel solo si showAlert es true
        // Fondo oscuro semitransparente como overlay
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg mx-6 shadow-lg">
            <p className="text-lg font-semibold mb-2">
              Bienvenido a la sección del mapa
            </p>
            <p className="text-sm">
              Esta sección te permite explorar el mapa interactivo. Haz clic en
              las ubicaciones para ver más detalles.
            </p>
            <div className="">
              <button
                onClick={closeAlert}
                className="bg-primary hover:bg-blue-600 text-white  font-bold py-2 px-4 mt-4 rounded"
              >
                Comenzar
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-6">
        <div
          className={`bg-primary min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500 text-secondHover px-4`}
        >
          <div className="py-3 flex justify-end ">
            <HiMenuAlt3
              size={27}
              className="cursor-pointer hover:text-white transition-all"
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
          <div
            className={` flex flex-col  font-primary cursor-pointer relative`}
          >
            <Link
              to="/"
              className="group flex items-center gap-3.5 p-1 rounded-md hover:text-white hover:transition-all text-[19px]"
            >
              <div>
                <FaHome className="text-[25px]" />
              </div>
              <div
                style={{
                  transitionDelay: "100ms",
                }}
                className={` whitespace-pre duration-500 ${
                  !open && " opacity-0 translate-x-28 overflow-hidden "
                } `}
              >
                Inicio
              </div>
              <div
                className={`${
                  open && "hidden"
                } absolute left-48 z-30 bg-white font-extralight whitespace-pre text-primary rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-0 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
              >
                Inicio
              </div>
            </Link>
            <Link
              to="/Contacts"
              className="group flex items-center gap-3.5 p-1 rounded-md hover:text-white hover:transition-all text-[19px]"
            >
              <div>
                <IoIosMail className="text-[25px]" />
              </div>
              <div
                style={{
                  transitionDelay: "200ms",
                }}
                className={` whitespace-pre duration-500 ${
                  !open && " opacity-0 translate-x-28 overflow-hidden "
                }  `}
              >
                Contacto
              </div>
              <div
                className={`${
                  open && "hidden"
                } absolute left-48 z-30 bg-white font-extralight whitespace-pre text-primary rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-0 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
              >
                Contacto
              </div>
            </Link>
            <Link
              className="group flex items-center gap-3.5 p-1 rounded-md hover:text-white hover:transition-all text-[19px]"
              onClick={() =>
                handleCityClick([-38.539686161180306, -58.73908767116438])
              }
            >
              <div>
                <TbNavigationNorth className="text-[25px]" />
              </div>
              <div
                style={{
                  transitionDelay: "300ms",
                }}
                className={` whitespace-pre duration-500 ${
                  !open && " opacity-0 translate-x-28 overflow-hidden "
                }  `}
              >
                Nosotros
              </div>
              <div
                className={`${
                  open && "hidden"
                } absolute left-48 z-30 bg-white font-extralight whitespace-pre text-primary rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-0 group-hover:left-14 group-hover:duration-300 group-hover:w-fit `}
              >
                Nosotros
              </div>
            </Link>
          </div>
          <div
            className={`${
              !open && "opacity-0 translate-x-[-28px] overflow-hidden"
            } duration-500 mt-4 h-[400px] mb-10 overflow-y-auto max-w-[250px] bg-secondHover flex flex-col gap-4 relative p-3 border-l-[2px] border-primary rounded-xl shadow-2xl`}
          >
            {markers.map((marker, i) => (
              <Link
                className="font-primary text-primary text-[18px] transition-transform duration-300 hover:scale-110 p-2 font-semibold flex items-center"
                key={i}
              >
                <div
                  to="/"
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleCityClick(marker.geocode)}
                >
                  <div>
                    <FaMapMarkerAlt />
                  </div>
                  <h2>{marker.popUp}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full z-10 ">
        <MapContainer
          className="App "
          center={mapCenter}
          zoom={zoom}
          key={mapKey}
        >
          <TileLayer
            atributtion='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}
          >
            {markers.map((marker) => (
              <Marker
                position={marker.geocode}
                key={marker.geocode}
                onClick={() => handleCityClick(marker.geocode)}
              >
                <Popup>
                  <h2>{marker.popUp}</h2>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
          {necoruta.map((neco) => (
            <Marker
              position={neco.geocode}
              icon={customIcon}
              key={neco.geocode}
            >
              <Popup>
                <h2>{neco.popUp}</h2>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className={`absolute bottom-4 right-4 z-50`}>
        <img
          src={transparentLogo}
          alt="Transparent Logo"
          className={`${open && "hidden"} w-[210px] h-[160px]`}
        />
      </div>
    </div>
  );
};

export default Map;
