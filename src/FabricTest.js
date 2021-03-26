import React, { useEffect, useState } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { fabric } from "fabric";
const initCanvas = () =>
  new fabric.Canvas("canvas", {
    height: 200,
    width: 200,
    backgroundColor: "pink",
  });
function FabricTest() {
  const [canvas, setCanvas] = useState("");
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  console.log(canvas);
  return (
    <div>
      <canvas id="canvas" />
    </div>
  );
}

export default FabricTest;
