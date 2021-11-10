import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import design from "../img/svgs/web-design-svg.svg";
import pwa from "../img/svgs/pwa-svg.svg";
import app from "../img/svgs/app-1.svg";

const ServicesSection = () => {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Web Application Design and Development"}
            paragraph={
              "I provide solution by design and build responsive mobile first websites and applications for individuals, small and medium size businesses."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={app}
              title={"Mobile Application Development"}
              paragraph={
                "Leveraging the power of React Native to build and deliver optimal and user friendly mobile cross platform applications."
              }
            />
          </div>
          <ServiceCard
            image={pwa}
            title={"Progressive Web Applications (PWA's)"}
            paragraph={
              "Transform your pages, websites to appear to users in the same way as native or mobile applications, by leveraging the power of PWA's."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
};

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
