export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
  
    if (section) {
      // Calcula la posición del elemento de destino
      const offset = section.offsetTop;
  
      // Realiza el desplazamiento suave hasta la sección de destino
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  }