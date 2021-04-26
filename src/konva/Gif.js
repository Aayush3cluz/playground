import "gifler";
import { Image } from "react-konva";
import React from "react";
// the first very simple and recommended way:
const GIF = ({ src, h, w, x, y, rotation, layers, setlayers, index }) => {
  const imageRef = React.useRef(null);
  const canvas = React.useMemo(() => {
    const node = document.createElement("canvas");
    return node;
  }, []);

  React.useEffect(() => {
    // save animation instance to stop it on unmount
    if (imageRef.current !== null) {
      let anim;
      window.gifler(src).get((a) => {
        anim = a;
        anim.animateInCanvas(canvas);
        anim.onDrawFrame = (ctx, frame) => {
          ctx.drawImage(frame.buffer, frame.x, frame.y);
          imageRef.current.getLayer().draw();
        };
      });

      return () => anim.stop();
    }
  }, [src, canvas]);

  return (
    <Image
      image={canvas}
      ref={imageRef}
      height={h}
      width={w}
      x={x}
      y={y}
      rotation={rotation}
      draggable
      onDragEnd={(e) => {
        change3(e.target.x(), layers, index, setlayers, "x");
        change3(e.target.y(), layers, index, setlayers, "y");
      }}
    />
  );
};
let change3 = (value, layers, index, setlayers, label) => {
  let copy = [...layers];
  let toChange = copy[index];
  toChange.gif[label] = value;
  copy[index] = toChange;
  setlayers([...copy]);
};
export default GIF;
