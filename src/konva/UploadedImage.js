import React, { useEffect } from "react";
import useImage from "use-image";
import { Image } from "react-konva";
import smartcrop from "smartcrop";
function UploadedImage({ src, h, w, x, y, rotation }) {
  console.log("here2");
  return (
    <Image image={src} height={h} width={w} x={x} y={y} rotation={rotation} />
  );
}

export default UploadedImage;
// import * as React from "react";
// import smartcrop from "smartcrop";

// const CropImage = () => {
//   const [image, setImage] = React.useState(null);
//   const [canvasSize, setCanvasSize] = React.useState({
//     height: "100px",
//     width: "100px",
//   });

//   const imgElRef = React.createRef();
//   const photoRef = React.createRef();

//   React.useEffect(() => {
//     console.log("imgElRef.current", imgElRef.current);
//     let imageHTML = imgElRef.current;
//     let photoCanvas = photoRef.current;

//
//   }, [image]);

//   const fileHandler = (files) => {
//     let reader = new FileReader();
//     reader.onload = function () {
//       let image = reader.result;
//       setImage(image);
//       console.log(" onload", imgElRef.current);
//     };
//     reader.readAsDataURL(files[0]);
//   };
//   return (
//     <React.Fragment>
//       <input
//         type="file"
//         onChange={(e) => {
//           fileHandler(e.target.files);
//         }}
//       />

//       <img ref={imgElRef} src={image} alt="images" />
//       {/* <canvas
//         ref={photoRef}
//         width={`${canvasSize.width}`}
//         height={`${canvasSize.height}`}
//       /> */}
//       <canvas ref={photoRef} width="200px" height="200px" />
//     </React.Fragment>
//   );
// };

// export default CropImage;
