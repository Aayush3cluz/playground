import WebFont from "webfontloader";
import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const loadFonts = (family) => {
  WebFont.load({
    google: {
      families: [family],
    },
  });
};

function FontLoader() {
  const [font, setFont] = useState("");
  return (
    <>
      <TextField
        label="Add font"
        onChange={(e) => setFont(e.target.value)}
        variant="outlined"
      ></TextField>
      <button onClick={() => loadFonts(font)}>Add font</button>
    </>
  );
}

export default FontLoader;
