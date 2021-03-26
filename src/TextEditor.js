import { TextField } from "@material-ui/core";
import React from "react";

function TextEditor({
  content,
  changeContent,
  size,
  changeSize,
  family,
  changeFamily,
  x,
  y,
  rotation,
  changeX,
  changeY,
  changeRotation,
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
      </div>
    </div>
  );
}

export default TextEditor;
