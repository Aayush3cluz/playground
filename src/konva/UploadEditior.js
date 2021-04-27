import { TextField } from "@material-ui/core";
import React, { useRef, useEffect, useState } from "react";
import Cropper from "react-cropper";
import smartcrop from "smartcrop";
import "cropperjs/dist/cropper.css";
import ToggleButton from "@material-ui/lab/ToggleButton";
function UploadEditor({
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

        const { x, y, width, height } = cropObj.topCrop;

        setCanvasSize({ height: `${height}px`, width: `${width}px` });

        let photoCtx = photoCanvas.getContext("2d");

        photoCtx.drawImage(imageHTML, x, y, width, height, 0, 0, width, height);
        photoCanvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          changeImgUrl(url);
        });

        let imgurl = photoCanvas.toDataURL();
        let file = new File([imgurl], "name");
      }
    };
    asyncFn();
  }, [image, w, h]);

  const fileHandler = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.onload = function () {
      let image = reader.result;
      setImage(image);
      console.log(" onload", imgElRef.current);
    };
    reader.readAsDataURL(files[0]);
    changeImg(e);
  };
  return (
    <div>
      <h3>Upload Editor</h3>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <input
          type="file"
          onChange={(e) => fileHandler(e)}
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
        src={image}
        alt="images"
        style={{ display: "none" }}
      />
      <canvas
        ref={photoRef}
        style={{ display: "none" }}
        height={canvasSize.height}
        width={canvasSize.width}
      />
    </div>
  );
}

export default UploadEditor;
