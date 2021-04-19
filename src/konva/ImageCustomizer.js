import { TextField } from "@material-ui/core";
import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
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
  selected,
  changeSelected,
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
    </div>
  );
}

export default ImageCustomizer;
