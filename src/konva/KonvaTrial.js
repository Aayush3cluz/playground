import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Stage, Layer, Text } from "react-konva";
import useImage from "use-image";
import KonvaImage from "./KonvaImage";
import LayerEditor from "./LayerEditor";
import GIF from "./Gif";
import FontLoader from "./FontLoader";
import UploadedImage from "./UploadedImage";
import KonvaVideo from "./KonvaVideo";
const useStyles = makeStyles((theme) => ({
  stage: {
    border: "1px solid black",
    "&:first-child": {
      border: "1px solid black",
    },
  },
}));

const KonvaTrial = () => {
  const styles = useStyles();

  const [size, setSize] = useState({ h: 400, w: 400 });
  const [layers, setlayers] = useState([]);
  const [files, setFiles] = useState([]);
  const stageRef = React.useRef(null);

  const handleExport = () => {
    const uri = stageRef.current.toDataURL({ mimeType: "image/gif" });
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    downloadURI(uri, "stage.gif");
  };
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(layers)], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
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
        <Button onClick={() => downloadTxtFile()}>Export JSON state</Button>
        <FontLoader />
        <Stage
          height={size.h}
          width={size.w}
          ref={stageRef}
          className={styles.stage}
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
                    index={index}
                    layers={layers}
                    setlayers={setlayers}
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
                    fill={layer.text.color}
                    width={layer.text.width}
                    draggable
                    onDragEnd={(e) => {
                      console.log(e.target);
                      change(
                        parseInt(e.target.x()) === NaN
                          ? 0
                          : parseInt(e.target.x()),
                        layers,
                        index,
                        setlayers,
                        "x"
                      );
                      change(
                        parseInt(e.target.y()) === NaN
                          ? 0
                          : parseInt(e.target.y()),
                        layers,
                        index,
                        setlayers,
                        "y"
                      );
                    }}
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
                    index={index}
                    layers={layers}
                    setlayers={setlayers}
                  />
                )}
                {layer.upl && (
                  <KonvaImage
                    src={layer.upl.src}
                    h={layer.upl.h}
                    w={layer.upl.w}
                    x={layer.upl.x}
                    y={layer.upl.y}
                    rotation={layer.upl.rotation}
                    index={index}
                    layers={layers}
                    setlayers={setlayers}
                    isUpl
                  />
                )}
                {layer.vid && (
                  <KonvaVideo
                    src={layer.vid.src}
                    h={layer.vid.h}
                    w={layer.vid.w}
                    x={layer.vid.x}
                    y={layer.vid.y}
                    rotation={layer.vid.rotation}
                    index={index}
                    layers={layers}
                    setlayers={setlayers}
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
                key={index}
                layer={layer}
                layers={layers}
                setlayers={setlayers}
                index={index}
                files={files}
                setFiles={setFiles}
              />
            );
        })}
      </div>
    </div>
  );
};

let change = (value, layers, index, setlayers, label) => {
  if (label === "x" || label === "y") value = parseInt(value);
  let copy = [...layers];
  let toChange = copy[index];
  toChange.text[label] = value;
  copy[index] = toChange;
  setlayers([...copy]);
};

export default KonvaTrial;
