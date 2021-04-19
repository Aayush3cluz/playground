import React, { useEffect } from "react";
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
  const imgElRef = React.createRef();
  useEffect(() => {
    console.log("here");
    if (src !== null) {
      let dummy = document.createElement("img");
      dummy.setAttribute("src", src);
      dummy.setAttribute("ref", imgElRef);
      document.body.appendChild(dummy);
      // console.log(dummy);
      // let imageHTML = imgElRef.current;
      // console.log(imageHTML);
      // const asyncFn = async () => {
      //   const cropObj = await smartcrop.crop(imageHTML, {
      //     width: 50,
      //     height: 50,
      //     ruleOfThirds: true,
      //     minScale: 1.0,
      //   });
      //   console.log(cropObj);
      // };

      // const { x, y, width, height } = cropObj.topCrop;

      // setCanvasSize({ height: `${height}px`, width: `${width}px` });
      // console.log("canvasSize", canvasSize);

      // let photoCtx = photoCanvas.getContext("2d");

      // photoCtx.drawImage(imageHTML, x, y, width, height, 0, 0, 200, 200);
      // let imgurl = photoCanvas.toDataURL();
      // console.log("imgurl", imgurl);
      // let file = new File([imgurl], "name");
      // console.log("file", file);
      // asyncFn();
    }
  }, [src]);
  return (
    <Image
      image={image}
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
