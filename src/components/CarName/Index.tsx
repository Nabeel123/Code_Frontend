import React from "react";
import { Flex, Inline, Text } from "vcc-ui";

type CarNameProps = {
  bodyType: string;
  modelName: string;
  modelType: string;
};

const CarName = ({ bodyType, modelName, modelType }: CarNameProps) => {
  return (
    <Flex
      extend={{
        marginTop: "50px",
      }}
    >
      <Text extend={{ marginBottom: "4px" }}>{bodyType} </Text>
      <Text extend={{ marginBottom: "10px" }}>
        <Inline extend={{ fontWeight: "bold" }}> {modelName} </Inline>
        {modelType}
      </Text>
    </Flex>
  );
};

export default CarName;
