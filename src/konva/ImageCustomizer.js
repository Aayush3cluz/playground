import { TextField } from "@material-ui/core";
import React from "react";
import smartcrop from "smartcrop";
import ToggleButton from "@material-ui/lab/ToggleButton";
function ImageCustomizer({
  src,
  changeImg,
  changeImgUrl,
  h,
  w,
  changeH,
  changeW,
  x,
  y,
  changeX,
  changeY,
  rotation,
  changeRotation,
  gif,
  selected,
  changeSelected,
}) {
  const [image, setImage] = React.useState(null);
  const [canvasSize, setCanvasSize] = React.useState({
    height: "100px",
    width: "100px",
  });
  const imgElRef = React.createRef();
  const photoRef = React.createRef();

  React.useEffect(() => {
    if (gif) {
      console.log("imgElRef.current", imgElRef.current);
      let imageHTML = imgElRef.current;
      let photoCanvas = photoRef.current;

      const asyncFn = async () => {
        if (imageHTML !== null) {
          const cropObj = await smartcrop.crop(imageHTML, {
            width: w,
            height: h,
            ruleOfThirds: true,
            minScale: 1.0,
          });
          console.log(cropObj);
          const { x, y, width, height } = cropObj.topCrop;

          setCanvasSize({ height: `${height}px`, width: `${width}px` });

          let photoCtx = photoCanvas.getContext("2d");

          photoCtx.drawImage(imageHTML, x, y, width, height, 0, 0, w, h);
          photoCanvas.toBlob((blob) => {
            console.log("here");
            const url = URL.createObjectURL(blob);
            changeImgUrl(url);
          });
        }
      };
      asyncFn();
    }
  }, [image, w, h]);

  return (
    <div>
      <h3>{gif ? "Gif Editor" : "Image Editor"}</h3>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <TextField
          label="source"
          value={src}
          onChange={changeImg}
          style={{ width: "100%", marginRight: 10 }}
        />
        <TextField
          label="h"
          value={h}
          onChange={changeH}
          style={{ width: "100%", marginRight: 10 }}
        />
        <TextField
          label="w"
          value={w}
          onChange={changeW}
          style={{ width: "100%", marginRight: 10 }}
        />
        <TextField
          label="x"
          value={x}
          onChange={changeX}
          style={{ width: "100%", marginRight: 10 }}
        />
        <TextField
          label="y"
          value={y}
          onChange={changeY}
          style={{ width: "100%", marginRight: 10 }}
        />
        <TextField
          label="rotation"
          value={rotation}
          onChange={changeRotation}
          style={{ width: "100%", marginRight: 10 }}
        />
        <ToggleButton
          value="check"
          selected={selected}
          onChange={changeSelected}
          style={{
            width: "100%",
            marginRight: 10,
            background: `${selected ? "green" : "white"}`,
          }}
        >
          Toggle
        </ToggleButton>
      </div>
      <img
        ref={imgElRef}
        src={src}
        alt="images"
        style={{ display: "none" }}
        crossOrigin="anonymous"
      />
      <canvas ref={photoRef} style={{ display: "none" }} />
    </div>
  );
}

export default ImageCustomizer;
