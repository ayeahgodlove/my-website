import React from "react";
import styled from "styled-components";

interface IProps {
  icon: React.ReactNode;
  title: string;
}
const SmallTitle: React.FC<IProps> = ({ icon, title }) => {
  return (
    <SmallTitleStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  );
};

const SmallTitleStyled = styled.div`
  display: flex;
  align-items: center;
  p {
    padding-right: 1rem;
    svg {
      font-size: 3rem;
    }
  }
  h3 {
    color: var(--white-color);
    font-size: 2rem;
  }
`;

export default SmallTitle;
