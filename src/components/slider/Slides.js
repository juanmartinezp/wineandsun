import React from "react";
import "./Slider.css";
import ingreso from "../../media/ingreso.png";
import comedor from "../../media/comedor.png";
import dormitorio from "../../media/dormitorio.png";
import antebaño from "../../media/antebaño.png"
import baño from "../../media/baño.png"
import cocina from "../../media/cocina.png"
import dormitorio2 from "../../media/dormitorio2.png";



const slidesInfo = [
  {
    src: ingreso,
    alt: "ingreso",
    desc: "Ingreso",
    // url: "https:///",
  },
  {
    src: comedor,
    alt: "comedor",
    desc: "Comedor",
    // url: "https://",
  },
  {
    src: dormitorio,
    alt: "dormitorio",
    desc: "Habitación Doble",
    // url: "https://",
  },
  {
    src: dormitorio2,
    alt: "dormitorio2",
    desc: "Habitación Matrimonial",
    // url: "https://",
  },
  {
    src: antebaño,
    alt: "antebaño",
    desc: "Ante Baño",
    // url: "https:///",
  },
  {
    src: baño,
    alt: "baño",
    desc: "Baño",
    // url: "https:///",
  },
  {
    src: cocina,
    alt: "cocina",
    desc: "Cocina",
    // url: "https:///",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.url} target="_blank" rel="noreferrer">
      <img src={slide.src} alt={slide.alt} />
      <div className="slide-desc">
        <span>{slide.desc}</span>
      </div>
    </a>
  </div>
));

export default slides;
