import React, { useEffect, useState } from "react";
import useImage from "use-image";
import { Image } from "react-konva";
import smartcrop from "smartcrop";
function KonvaImage({
  src,
  h,
  w,
  x,
  y,
  rotation,
  layers,
  setlayers,
  index,
  isUpl,
}) {
  const [image] = useImage(src, "Anonymous");
  const [cropped, setCropped] = useState(false);
  const imgElRef = React.createRef();
  useEffect(() => {
    console.log("imgElRef.current", imgElRef.current);
    // let imageHTML = imgElRef.current;

    // const asyncFn = async () => {
    //   if (imageHTML !== null) {
    //     const cropObj = await smartcrop.crop(imageHTML, {
    //       width: 50,
    //       height: 50,
    //       ruleOfThirds: true,
    //       minScale: 1.0,
    //     });
    //     console.log("crop", cropObj.topCrop);

    //     const { x, y, width, height } = cropObj.topCrop;
    //     console.log(cropObj);
    //   }
    // };
    // asyncFn();
    setCropped(true);
  }, [src]);
  return (
    <Image
      image={image}
      ref={imgElRef}
      height={h}
      width={w}
      x={x}
      y={y}
      rotation={rotation}
      draggable
      onDragEnd={(e) => {
        isUpl
          ? change4(e.target.x(), layers, index, setlayers, "x")
          : change2(e.target.x(), layers, index, setlayers, "x");
        isUpl
          ? change4(e.target.y(), layers, index, setlayers, "y")
          : change2(e.target.y(), layers, index, setlayers, "y");
      }}
    />
  );
}
let change2 = (value, layers, index, setlayers, label) => {
  let copy = [...layers];
  let toChange = copy[index];
  toChange.img[label] = value;
  copy[index] = toChange;
  setlayers([...copy]);
};

let change4 = (value, layers, index, setlayers, label) => {
  let copy = [...layers];
  let toChange = copy[index];
  toChange.upl[label] = value;
  copy[index] = toChange;
  setlayers([...copy]);
};

export default KonvaImage;
