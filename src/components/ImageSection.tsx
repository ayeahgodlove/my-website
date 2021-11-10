import React from "react";
import styled from "styled-components";
import resume from "../img/me.jpg";
import PrimaryButton from "./PrimaryButton";

const ImageSection: React.FC = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" height="700" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Ayeah Godlove Akoni</span>
        </h4>
        <p className="paragraph">
          And I love building solutions to problems.
          I am strong engineering professional with a <i>Bachelor of Technology in Computer Networks and System Maintenance</i>.
          2 yrs ago, immediately after my graduation, I fell in love with Software Development I took the decision to switch.
          It wasn't a smooth sailing journey but I still pulled it, I participate in the <i>Google Africa Developer (GAD's) Scholarship program 2019</i> in the Mobile Web Specialist Track,
          where I made it amongst the top 1000 selected candidates to take the certification examination, even though we faced a major setback from the rise of the COVID-19 pandemic
          resulting to the discontinuation of the Program by Google.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Ayeah Godlove Akoni</p>
            <p>: 22</p>
            <p>: Cameroonian </p>
            <p>: English, French,  </p>
            <p>: Bamenda, Cameroon</p>
            <p>: Software Developer and Freelance</p>
          </div>
        </div>
        <PrimaryButton title={"Download Cv"} />
      </div>
    </ImageSectionStyled>
  );
};

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
