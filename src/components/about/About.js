import React from "react";
import "./About.css";
import photo from "../../media/yo.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>¿Quiénes somos?</h3>
        <p>
        Bienvenidos a Wine & Sun, un lugar donde encontrarás un ambiente cálido y acogedor 
        que te hará sentir como en casa. Nuestra prioridad es ofrecer un servicio de atención al huésped 
        personalizado y de alta calidad, para que disfrutes de una estadía cómoda y memorable.

        Nuestras habitaciones han sido diseñadas pensando en tu comodidad, con una decoración 
        moderna y acogedora que invita al descanso y al relax. Además, están equipadas con todas 
        las comodidades que necesitas, como aire acondicionado, calefacción, TV de pantalla plana, 
        Wi-Fi gratuito y ropa de cama de alta calidad.
        
        Pero lo que realmente nos diferencia es nuestra atención personalizada al huésped. 
        Desde el momento en que llegues, serás recibido por los amables dueños, quienes estarán disponibles 
        para ayudarte en todo lo que necesites, desde recomendaciones locales hasta sugerencias de restaurantes y actividades en la zona.
        
        En Wine & Sun, nos enorgullece ofrecer una experiencia única y memorable que no olvidarás. 
        Esperamos darte la bienvenida pronto y que puedas disfrutar de una estadía inolvidable.
        </p>
      </div>
      <div className="about-img">
        <img src={photo} alt="" />
      </div>
    </div>
  );
}

export default About;
