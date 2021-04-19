import * as React from "react";
import smartcrop from "smartcrop";
function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
const CropImage = () => {
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
      const cropObj = await smartcrop.crop(imageHTML, {
        width: 50,
        height: 50,
        ruleOfThirds: true,
        minScale: 1.0,
      });

      const { x, y, width, height } = cropObj.topCrop;

      setCanvasSize({ height: `${height}px`, width: `${width}px` });

      let photoCtx = photoCanvas.getContext("2d");

      photoCtx.drawImage(imageHTML, x, y, width, height, 0, 0, 200, 200);

      // photoCanvas = photoRef.current;
      let imgurl = photoCanvas.toDataURL();
      imgurl = URL.createObjectURL(dataURLtoBlob(imgurl));
      console.log("imgurl", imgurl);
      let file = new File([imgurl], "name");
    };
    asyncFn();
  }, []);

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
    <>
      <img
        ref={imgElRef}
        src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLL_JOP0qM29RcBjU-BzuloJLGJF7TkPj7Jw&usqp=CAU`}
        alt="images"
        crossorigin="Anonymous"
        style={{ width: "30%", height: "30%" }}
      />
      <canvas
        ref={photoRef}
        width="200px"
        height="200px"
        // style={{ display: "none" }}
      />
    </>
  );
};

export default CropImage;
