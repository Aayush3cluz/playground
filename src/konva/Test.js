import * as React from "react";
import smartcrop from "smartcrop";
import { Modal } from "@material-ui/core";
const CropImage = ({ src }) => {
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
          width: 50,
          height: 50,
          ruleOfThirds: true,
          minScale: 1.0,
        });
        console.log("crop", cropObj.topCrop);
        console.log("photoCanvas", photoCanvas);

        const { x, y, width, height } = cropObj.topCrop;

        setCanvasSize({ height: `${height}px`, width: `${width}px` });
        console.log("canvasSize", canvasSize);

        let photoCtx = photoCanvas.getContext("2d");

        photoCtx.drawImage(imageHTML, x, y, width, height, 0, 0, 200, 200);
        let imgurl = photoCanvas.toDataURL();
        console.log("imgurl", imgurl);
        let file = new File([imgurl], "name");
        console.log("file", file);
      }
    };
    asyncFn();
  }, [image]);

  const fileHandler = (files) => {
    let reader = new FileReader();
    reader.onload = function () {
      let image = reader.result;
      setImage(image);
      console.log(" onload", imgElRef.current);
    };
    reader.readAsDataURL(files[0]);
  };
  return (
    <React.Fragment>
      <input
        type="file"
        onChange={(e) => {
          fileHandler(e.target.files);
        }}
      />
      <img
        ref={imgElRef}
        src={image}
        alt="images"
        style={{ display: "none" }}
      />

      {/* <canvas
        ref={photoRef}
        width={`${canvasSize.width}`}
        height={`${canvasSize.height}`}
      /> */}
      <canvas ref={photoRef} width="200px" height="200px" />
    </React.Fragment>
  );
};

export default CropImage;
