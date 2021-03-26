import { TextField } from "@material-ui/core";
import React from "react";

function ImageCustomizer({
  src,
  changeImg,
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
}) {
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
      </div>
    </div>
  );
}

export default ImageCustomizer;
