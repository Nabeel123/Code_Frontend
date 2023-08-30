import React from "react";
import Image from "next/image";

import chevron from "../../../docs/chevron-circled.svg";
import { Spacer, Flex } from "vcc-ui";

type PaginationProps = {
  goToPreviousPage: () => void;
  goToNextPage: () => void;
};

const Pagination = ({ goToPreviousPage, goToNextPage }: PaginationProps) => {
  return (
    <Flex
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        margin: "40px",
      }}
    >
      <Image
        src={chevron}
        alt="Picture of the Car"
        style={{ margin: "20px", transform: " rotate(180deg)" }}
        onClick={goToPreviousPage}
      />
      <Spacer />
      <Image
        src={chevron}
        alt="Picture of the Car"
        style={{ margin: "20px" }}
        onClick={goToNextPage}
      />
    </Flex>
  );
};

export default Pagination;
