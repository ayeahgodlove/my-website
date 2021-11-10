import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";

const Resume: React.FC = () => {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2019 - 2020"}
            title={"Google Africa Developer's Scholarship 2019 (GAD's)"}
            subTitle={"Andela | Plurasight | @GrowWithGoogle"}
            text={
              "Learning the concepts of responsive web design, accessibility, user experience, progressive web apps technology with hands on code. Technologies; HTML5, CSS3, JavaScript, Angular, and ReactJs"
            }
          />
          <ResumeItem
            year={"2019 - 2020"}
            title={"Frontend Web Development"}
            subTitle={"Yems Group Inc (Y'G)"}
            text={
              "Building responsive and scalable websites and application. Used the following technologies; HTML, CSS, Javascript, Bootstrap, SASS for the frontend UI and PHP, MySQl for backend programming"
            }
          />
          <ResumeItem
            year={"2020 - Present"}
            title={"Web Developer"}
            subTitle={"Freelancer"}
            text={
              "Building blazing fast web application interfaces with Javascript | Typescript, ReactJs, Redux, C# and ASP.Net Core, PHP | Laravel"
            }
          />
          <ResumeItem
            year={"2020 - Present"}
            title={"Full Stack Developer"}
            subTitle={"Cameroon Baptist Convention Health Service (CBCHS)"}
            text={
              "Building blazing fast, user-friendly and scalable web application, using the power of ReactJs for frontend, and consuming RESTFul API's built with C#, ASP.Net Core and MSQLServer"
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2016 - 2019"}
            title={"Bachelor of Technology (B-Tech)"}
            subTitle={"COLTECH University of Bamenda"}
            text={
              ""
            }
          />
          <ResumeItem
            year={"2014 - 2016"}
            title={"G.C.E Advance - Levels"}
            subTitle={"G.B.H.S ATIELA NKWEN BAMENDA"}
            text={
              ""
            }
          />
          <ResumeItem
            year={"2009 - 2014"}
            title={"G.C.E Ordinary - Levels"}
            subTitle={"G.B.H.S ATIELA NKWEN BAMENDA"}
            text={
              ""
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
