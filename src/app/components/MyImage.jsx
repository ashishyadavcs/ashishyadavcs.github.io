import Image from "next/image";
import React from "react";

const MyImage = (props) => {
  const { nextImage = true, src = "/images/me/ashish.png" } = props;
  if (nextImage) return <Image {...props} />;
  return <img {...props} />;
};

export default MyImage;
