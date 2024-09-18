import React, {useEffect} from 'react'

// Components
import HeroSlider from '../components/HeroSlider'
import Transportes from '../components/Transportes'
import Header from "../components/Header";
import Footer from "../components/Footer";


const Home = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      function gtagSendEvent(url) {
        var callback = function () {
          if (typeof url === 'string') {
            window.location = url;
          }
        };
        gtag('event', 'conversion_event_contact', {
          'event_callback': callback,
          'event_timeout': 2000,
        });
        return false;
      }
    `;
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script); // Limpiar el script al desmontar el componente
    };
  }, []);

  return (
    <>
    <Header/>
    <HeroSlider/>
    <Transportes/>
    <Footer/>
    </>
  )
}

export default Home