import React from "react";
import Resume from "../../components/Resume";
import Skills from "../../components/Skills";
import { MainLayout } from "../../styles/Layouts";

const ResumePage: React.FC = () => {
  return (
    <MainLayout>
      <Skills />
      <Resume />
    </MainLayout>
  );
};

export default ResumePage;
