import { TextField } from "@material-ui/core";
import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import smartcrop from "smartcrop";
function VideoEditor({
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

        photoCtx.drawImage(imageHTML, x, y, width, height, 0, 0, w, h);
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

  return (
    <div>
      <h3>Upload Editor</h3>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <input
          type="file"
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
        <img
          ref={imgElRef}
          src={image}
          alt="images"
          style={{ display: "none" }}
        />
        <canvas
          ref={photoRef}
          width="200px"
          height="200px"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default VideoEditor;
