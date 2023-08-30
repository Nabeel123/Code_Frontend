import React from "react";
import { Flex, TextInput } from "vcc-ui";

type SearchProps = {
  handleQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  query: string;
};
const Search = ({ handleQueryChange, query }: SearchProps) => {
  return (
    <Flex
      style={{
        width: "40%",
        margin: "40px",
        marginBottom: "0px",
      }}
    >
      <TextInput
        value={query}
        label="search by bodyType"
        onChange={handleQueryChange}
      />
    </Flex>
  );
};

export default Search;
