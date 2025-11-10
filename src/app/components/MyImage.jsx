import Image from "next/image";
import React from "react";

const MyImage = props => {
    const { nextImage = true, src = "/images/me/ashish.png" } = props;
    if (nextImage) return <Image src={src} height={300} width={500} {...props} />;
    return <img src={src} {...props} />;
};

export default MyImage;
