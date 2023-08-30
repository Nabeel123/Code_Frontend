import React from "react";
import { Link } from "vcc-ui";

type LinkProps = {
  text: string;
  url: string;
};

const Links = ({ text, url }: LinkProps) => {
  return (
    <Link href={url} arrow="right">
      {text}
    </Link>
  );
};

export default Links;
