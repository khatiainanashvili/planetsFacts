import React, { useState } from "react";
import styled from "styled-components";
export default function Mercury(props: any) {
  const planet = props.planet;
  const image = props.image;
  const imageStr = props.imageStr;
  const imageSurf = props.imageSurf;
  const overview = props.overview;
  const structure = props.structure;
  const surface = props.surface;
  const rotat = props.rotat;
  const revol = props.revol;
  const radius = props.radius;
  const temp = props.temp;

  const [content, setContent] = useState("overview");
  const [activeButton, setActiveButton] = useState<string | null>();
  const handleClick = (el: any) => {
    if (activeButton === el) {
      setActiveButton(null);
    } else {
      setActiveButton(el);
    }
    setContent(el);
  };
  const cont = [
    {
      id: 1,
      buttonText: "overview",
    },
    {
      id: 2,
      buttonText: "structure",
    },
    {
      id: 3,
      buttonText: "surface",
    },
  ];

  const Image = styled.div`
    &.surface-img {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }
    &.surface-img::after {
      content: "";
      background-image: url("${imageSurf}");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      top: 70%;
      width: 50%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 10;
    }
  `;
  return (
    <div className="container">
      <div className="content">
        <Image
          className={
            content == "surface" ? " surface-img planet-image" : " planet-image"
          }
        >
          <img
            src={
              content === "overview"
                ? image
                : content === "structure"
                ? imageStr
                : image
            }
            alt="planet image"
            className={planet}
          />
        </Image>
        <div className="planet-info">
          <h2>{planet}</h2>
          {content === "overview" ? (
            <p>{overview}</p>
          ) : content === "structure" ? (
            <p>{structure}</p>
          ) : content === "surface" ? (
            <p>{surface}</p>
          ) : (
            <p>{overview}</p>
          )}
          <span className="source">
            Source :
            <a href="https://www.wikipedia.org/" target="blanck">
              Wikipedia
            </a>
          </span>
        </div>
        <div className="buttons">
          {cont.map((element) => (
            <button
              className={
                activeButton === element.buttonText
                  ? `button-active  button ${planet}`
                  : `button ${planet}`
              }
              onClick={() => {
                handleClick(element.buttonText);
              }}
            >
              <span>0{element.id}</span>
              {element.buttonText === "structure" ? <p>internal</p> : ""}
              {element.buttonText}
              {element.buttonText === "surface" ? <p>geology</p> : ""}
            </button>
          ))}
        </div>
      </div>
      <div className="info">
        <div className="info-item">
          <span>ROTATION TIME</span>
          <h4>{rotat}</h4>
        </div>
        <div className="info-item">
          <span>REVOLUTION TIME</span>
          <h4>{revol}</h4>
        </div>
        <div className="info-item">
          <span>radius</span>
          <h4>{radius}</h4>
        </div>
        <div className="info-item">
          <span>AVERAGE TEMP.</span>
          <h4>{temp}</h4>
        </div>
      </div>
    </div>
  );
}
