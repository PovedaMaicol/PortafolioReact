import React from 'react';
import './styles/inicio.css';
import prof from '../img/ImagenEnPixel.jpeg'
import Typed from 'typed.js';
import { useTranslation } from "react-i18next";

const body = document.querySelector('body');





const Inicio = () => {
    const el = React.useRef(null);
   
  
    React.useEffect(() => {
    
      const typed = new Typed(el.current, {
        strings: [`I'm Maicol`],
        typeSpeed: 180,
      });
      return () => {
        typed.destroy();
      };
    }, []);

    const [t, i18n] = useTranslation("global");

    const handleDark = () => {
      if(body){
        body.classList.toggle('dark')
      
      }
     
    }
  
    const handleLanguaje = () => {
      i18n.changeLanguage("es")
  
    }
  
    const handleLanguajeEn = () => {
      i18n.changeLanguage("en")
    }
  
  
  
  
 


  return (
    <div className='home-container'>
      

<nav className='change-mode-container'>

<button className='btn-mode2' onClick={handleDark}><i className="bx bxs-moon"></i></button>
<div >
  
<button className='btn-mode' onClick={handleLanguaje}>ES</button>
<hr/>
<button className='btn-mode' onClick={handleLanguajeEn}>EN</button>

</div>




</nav>
   
        
        <br/>
        <br/>
    
      
      <figure className='img-container'>
        <img src={prof} alt='100' height='auto' width='auto'/>
      </figure>
      <br/>

      <div className='contenedor-title'>
      <h1>{t("home.hello")}</h1>
      <h1><span ref={el}></span></h1>
      </div>

      <br/>
        
        <p>{t("home.text")}</p>
        <br/>

<div className='enlaces'>
<a>{t("home.web-developer")}<i className='bx bx-download' ></i></a>
<a>{t("home.web-designer")}<i className='bx bx-code' ></i></a>
</div>
       
    </div>
  )
}

export default Inicio;