import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ProgressBar from "./ProgressBar";

const Skills = () => {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"Version Control"} width={"80%"} text={"80%"} />
          <ProgressBar title={"HTML5"} width={"85%"} text={"85%"} />
          <ProgressBar title={"CSS3"} width={"80%"} text={"80%"} />
          <ProgressBar title={"BOOTSTRAP | JQuery"} width={"100%"} text={"100%"} />
          <ProgressBar title={"JAVASCRIPT | Typescript"} width={"75%"} text={"75%"} />
          <ProgressBar title={"React JS"} width={"75%"} text={"75%"} />
          <ProgressBar title={"Next JS"} width={"60%"} text={"60%"} />
          <ProgressBar title={"C# | ASP.Net Core"} width={"50%"} text={"50%"} />
          <ProgressBar title={"Database (MySQL | SQL Server"} width={"60%"} text={"60%"} />
          <ProgressBar title={"APIs (REST)"} width={"95%"} text={"95%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
};

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
