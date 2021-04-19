import React from "react";
import Konva from "konva";
import { Image } from "react-konva";
const KonvaVideo = ({
  src,
  h,
  w,
  x,
  y,
  rotation,
  index,
  layers,
  setlayers,
}) => {
  const imageRef = React.useRef(null);
  const [size, setSize] = React.useState({ width: 50, height: 50 });

  // we need to use "useMemo" here, so we don't create new video elment on any render
  const videoElement = React.useMemo(() => {
    const element = document.createElement("video");
    element.src = src;
    element.loop = true;
    return element;
  }, [src]);

  // when video is loaded, we should read it size

  // use Konva.Animation to redraw a layer
  React.useEffect(() => {
    videoElement.play();
    const layer = imageRef.current.getLayer();

    const anim = new Konva.Animation(() => {}, layer);
    anim.start();

    return () => anim.stop();
  }, [videoElement]);

  return (
    <Image
      ref={imageRef}
      image={videoElement}
      x={x}
      y={y}
      stroke="red"
      width={w}
      height={h}
      draggable
      rotation={rotation}
      onDragEnd={(e) => {
        change5(e.target.x(), layers, index, setlayers, "x");
        change5(e.target.y(), layers, index, setlayers, "y");
      }}
    />
  );
};
let change5 = (value, layers, index, setlayers, label) => {
  let copy = [...layers];
  let toChange = copy[index];
  toChange.vid[label] = value;
  copy[index] = toChange;
  setlayers([...copy]);
};
export default KonvaVideo;
