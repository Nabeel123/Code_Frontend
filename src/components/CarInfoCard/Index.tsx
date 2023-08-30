import React from "react";
import CarName from "../CarName/Index";
import ImageCard from "../commons/Card";
import Links from "../commons/Link";
import { Flex } from "vcc-ui";
import { CarInfo } from "../../pages/Dashboard";

type CarInfoCardProps = {
  car: CarInfo;
};

const CarInfoCard = ({ car }: CarInfoCardProps) => {
  return (
    <Flex
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "20px",
        margin: "20px",
      }}
    >
      <CarName
        bodyType={car.bodyType}
        modelName={car.modelName}
        modelType={car.modelType}
      />
      <ImageCard imageUrl={car.imageUrl} />

      <Flex
        style={{
          display: "inline-flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "center",
          gap: "20px",
        }}
      >
        <Links text={"LEARN"} url={`/learn/${car.id}`} />
        <Links text={"SHOP"} url={`/shop/${car.id}`} />
      </Flex>
    </Flex>
  );
};

export default CarInfoCard;
