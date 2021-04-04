import React from "react";
import useImage from "use-image";
import { Image } from "react-konva";
function KonvaImage({ src, h, w, x, y, rotation }) {
  const [image] = useImage(src, "Anonymous");
  return (
    <Image image={image} height={h} width={w} x={x} y={y} rotation={rotation} />
  );
}

export default KonvaImage;
