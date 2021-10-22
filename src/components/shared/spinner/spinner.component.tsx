import React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  margin: 20px 0;
  margin-bottom: 20px;
  padding: 30px 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

export const SpinnerComponent: React.SFC = () => {
  return (
    <SpinnerContainer>
      <Spin />
    </SpinnerContainer>
  );
};
