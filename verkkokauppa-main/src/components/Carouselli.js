import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import rtx4090 from "./Images/4090.jpg";

export const Carouselli = () => {
  const carouselItemStyle = {
    width: "100%",
    height: "500px", // Set a fixed height
  };

  const imageStyle = {
    objectFit: "cover", // Use 'contain' to maintain aspect ratio without stretching
    width: "100%",
    height: "100%",
    borderRadius: "5px",
  };

  return (
    <Carousel className="text-center" style={{ marginTop: "20px" }}>
      <Carousel.Item style={carouselItemStyle}>
        <Image
          src={rtx4090}
          alt="First slide"
          style={imageStyle}
          className="mx-auto"
        />
        <Carousel.Caption>
          <h3>Huippuluokan näytönohjaimet</h3>
          <p>
            Tehokkaat näytönohjaimet tarjoavat upean pelikokemuksen ja nopean
            suorituskyvyn videoeditoinnissa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        <Image
          src="https://www.io-tech.fi/wp-content/uploads/2023/10/14900k-01.jpg"
          alt="Second slide"
          style={imageStyle}
          className="mx-auto"
        />
        <Carousel.Caption>
          <h3>Intel-suorittimet</h3>
          <p>
            Intel-prosessorit tarjoavat huippuluokan suorituskyvyn ja
            energiatehokkuuden monipuolisiin käyttötarkoituksiin.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
        <Image
          src="https://www.techpowerup.com/img/eDrwEiDLxY1w5kWf.jpg"
          alt="Third slide"
          style={imageStyle}
          className="mx-auto"
        />
        <Carousel.Caption>
          <h3>AMD Ryzen -prosessorit</h3>
          <p>
            AMD Ryzen -sarjan prosessorit tarjoavat monipuolisen suorituskyvyn
            pelaamiseen ja multitaskingiin.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
