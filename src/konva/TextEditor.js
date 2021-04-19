import { TextField } from "@material-ui/core";
import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";

function TextEditor({
  content,
  changeContent,
  size,
  changeSize,
  family,
  changeFamily,
  x,
  width,
  y,
  rotation,
  changeX,
  changeY,
  changeRotation,
  color,
  changeColor,
  changeWidth,
  selected,
  changeSelected,
}) {
  return (
    <div>
      <h3>Text Editor</h3>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <TextField
          label="content"
          value={content}
          onChange={changeContent}
          style={{ width: "100%", marginRight: 10 }}
          multiline
        />
        <TextField
          label="size"
          value={size}
          onChange={changeSize}
          style={{ width: "100%", marginRight: 10 }}
        />
        <TextField
          label="family"
          value={family}
          onChange={changeFamily}
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
        <TextField
          label="color"
          value={color}
          onChange={changeColor}
          style={{ width: "100%", marginRight: 10 }}
        />
        <TextField
          label="width"
          value={width}
          onChange={changeWidth}
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

export default TextEditor;
