import React from "react";
import Image, { ImageProps } from "next/image";
import { Card } from "vcc-ui";

type ImageCardProps = {
  imageUrl: string;
};

const ImageCard = ({ imageUrl }: ImageCardProps) => {
  return (
    <>
      <Card>
        <Image
          src={imageUrl}
          alt="Picture of the Car"
          width={400}
          height={250}
        />
      </Card>
    </>
  );
};

export default ImageCard;
