import React from "react";
import "./Maps.css";

function Maps() {
  return (
    <div className="mapcontainer">
      <div className="mapdesc">
        <h3>Nuestra Ubicación</h3>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.149323933713!2d-68.85042378487084!3d-32.94706678092102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0bc821c087dd%3A0xec5a275f093ebe3a!2sWine%26Sun!5e0!3m2!1ses!2sar!4v1677349289151!5m2!1ses!2sar"
          width="100%"
          height="450"
          title="wineandsun" 
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Maps;
