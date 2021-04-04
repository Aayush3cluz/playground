import { Button, TextField } from "@material-ui/core";
import React, { createContext, useState } from "react";
import { Stage, Layer, Rect, Text, Circle, Line, Image } from "react-konva";
import useImage from "use-image";
import KonvaImage from "./KonvaImage";
import LayerEditor from "./LayerEditor";
import GIF from "./Gif";
const KonvaTrial = () => {
  const [size, setSize] = useState({ h: 400, w: 400 });
  const [layers, setlayers] = useState([]);
  const stageRef = React.useRef(null);

  const handleExport = () => {
    const uri = stageRef.current.toDataURL({ mimeType: "image/gif" });
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    downloadURI(uri, "stage.gif");
  };
  const downloadURI = (uri, name) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <TextField
          label="height"
          value={size.h}
          onChange={(event) => {
            setSize({ ...size, h: event.target.value });
          }}
        />
        <TextField
          label="width"
          value={size.w}
          onChange={(event) => {
            setSize({ ...size, w: event.target.value });
          }}
        />
        <Button onClick={() => handleExport()}>Export</Button>
        <Stage
          height={size.h}
          width={size.w}
          style={{ border: "1px solid black" }}
          ref={stageRef}
        >
          {layers.map((layer, index) => {
            return (
              <Layer key={index}>
                {layer.img && (
                  <KonvaImage
                    src={layer.img.src}
                    h={layer.img.h}
                    w={layer.img.w}
                    x={layer.img.x}
                    y={layer.img.y}
                    rotation={layer.img.rotation}
                  />
                )}
                {layer.text && (
                  <Text
                    text={layer.text.content}
                    fontSize={layer.text.size}
                    fontFamily={layer.text.family}
                    x={layer.text.x}
                    y={layer.text.y}
                    rotation={layer.text.rotation}
                    wrap="word"
                    on
                  />
                )}
                {layer.gif && (
                  <GIF
                    src={layer.gif.src}
                    h={layer.gif.h}
                    w={layer.gif.w}
                    x={layer.gif.x}
                    y={layer.gif.y}
                    rotation={layer.gif.rotation}
                  />
                )}
              </Layer>
            );
          })}
        </Stage>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <p>Control Panel</p>
        <Button
          variant="outlined"
          onClick={() => {
            setlayers([...layers, { show: true, name: layers.length + 1 }]);
          }}
        >
          Add Layer
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {layers.map((layer, index) => {
          if (layer.show)
            return (
              <LayerEditor
                layer={layer}
                layers={layers}
                setlayers={setlayers}
                index={index}
              />
            );
        })}
      </div>
    </div>
  );
};

const InitImage = (url) => {
  return useImage(url);
};
export default KonvaTrial;
