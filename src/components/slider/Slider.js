import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

function Slider() {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Galería de Imágenes</h2>
      </div>
      <Carousel
        plugins={[
          "infinite",
          "centered",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 7,
            },
          },
        ]}
        animationSpeed={200}
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            itemWidth: 300,
            plugins: [
              "infinite",
              "centered",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 21,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default Slider;
