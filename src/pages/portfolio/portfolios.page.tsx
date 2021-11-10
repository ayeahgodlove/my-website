import React, { useState } from "react";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import Title from "../../components/Title";
import portfolios from "../../data/portfolios";
import { InnerLayout, MainLayout } from "../../styles/Layouts";

const allButtons: any[] = [
  "All",
  ...(new Set(portfolios.map((item) => item.category)) as any),
];

const PortfoliosPage: React.FC = () => {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button: string) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"portfolios"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
};

export default PortfoliosPage;
