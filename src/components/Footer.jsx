import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
  <>
 <section className='form'>      
<div className="content-form">
<h3 className="txt-descriptivo">Contact Me</h3>
<p className="contacts-txt">If you want to contact me,<br/>leave me a message!</p>
<input className="contacts-register" type="text" id="name" name="name" placeholder="Name"></input>
<input className="contacts-register" type="email" id="email" name="email" placeholder="email"></input>
<textarea className="contacts-register" type="messaje" id="messaje" name="messaje" rows="4"
placeholder="Messaje"></textarea>
<input className="button-send" type="submit" value="Send"></input>
</div>
</section> 
<br/>

<ul className='info_contact'>

<li className="contacts-list"><i className='bx bx-mobile-alt'></i>
<h3 className="contacts-subtitles">+57 319 722 8443</h3>
</li>

<li className="contacts-list"><i className='bx bx-envelope'></i>
    <h3 className="contacts-subtitles">stivsal12@gmail.com</h3>
</li>
<li className="contacts-list"><i className='bx bx-map'></i>
    <h3 className="contacts-subtitles">Barbosa, Santander</h3>
</li>

</ul>

<br/>

<ul className="footer-contacts">
                        <li className="footer-item"><a href="https://www.behance.net/maicolvillami"><i
                                    className='bx bxl-whatsapp'></i></a></li>
                        <li className="footer-item"><a href="https://www.behance.net/maicolvillami"><i
                                    className='bx bxl-behance'></i></a></li>
                        <li className="footer-item"><a href="https://github.com/PovedaMaicol"><i
                                    className='bx bxl-github'></i></a></li>
                        <li className="footer-item"><a
                                href="https://www.linkedin.com/in/maicol-salazar-7040b4299/"><i
                                    className='bx bxl-linkedin-square'></i></a></li>
                    </ul>
                    <br/>
</>
        
   
  )
}

export default Footer