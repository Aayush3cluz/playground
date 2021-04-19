import { Button } from "@material-ui/core";
import React from "react";
import ImageCustomizer from "./ImageCustomizer";
import TextEditor from "./TextEditor";
import UploadEditor from "./UploadEditior";
import VideoEditor from "./VideoEditor";

function LayerEditor({ layer, layers, setlayers, index, name, file, setFile }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <p>Layer {layer.name}</p>
        <Button
          variant="contained"
          onClick={() => {
            let copy = [...layers];
            let toChange = copy[index];
            let text = {
              content: "Test",
              size: 30,
              family: "Roboto",
              color: "#0000FF",
              x: 0,
              y: 0,
              width: 200,
              rotation: 0,
              userCanCustomize: false,
            };
            toChange.text = text;
            copy[index] = toChange;
            setlayers([...copy]);
          }}
        >
          Add Text
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            let copy = [...layers];
            let toChange = copy[index];
            let image = {
              src: "https://konvajs.org/assets/lion.png",
              h: 200,
              w: 200,
              x: 0,
              y: 0,
              rotation: 0,
              userCanCustomize: false,
            };
            toChange.img = image;
            copy[index] = toChange;
            setlayers([...copy]);
          }}
        >
          Add Image
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            let copy = [...layers];
            let toChange = copy[index];
            let gif = {
              src: "https://media.giphy.com/media/KjvCoMXU0sHiFtTvJj/giphy.gif",
              h: 200,
              w: 200,
              x: 0,
              y: 0,
              rotation: 0,
              userCanCustomize: false,
            };
            toChange.gif = gif;
            copy[index] = toChange;
            setlayers([...copy]);
          }}
        >
          Add Gif
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            let copy = [...layers];
            let toChange = copy[index];
            let upl = {
              src: null,
              h: 200,
              w: 200,
              x: 0,
              y: 0,
              rotation: 0,
              userCanCustomize: false,
            };
            toChange.upl = upl;
            copy[index] = toChange;
            setlayers([...copy]);
          }}
        >
          Upload image
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            let copy = [...layers];
            let toChange = copy[index];
            let vid = {
              src: null,
              h: 200,
              w: 200,
              x: 0,
              y: 0,
              rotation: 0,
              userCanCustomize: false,
            };
            toChange.vid = vid;
            copy[index] = toChange;
            setlayers([...copy]);
          }}
        >
          Upload Video
        </Button>
        <Button
          onClick={() => {
            let copy = [...layers];
            copy.splice(index, 1);
            setlayers([...copy]);
          }}
        >
          Remove Layer
        </Button>
        <Button
          onClick={() => {
            let copy = [...layers];
            if (index === 0) return;
            let temp = copy[index - 1];
            copy[index - 1] = copy[index];
            copy[index] = temp;
            setlayers([...copy]);
          }}
        >
          Move Up
        </Button>
        <Button
          onClick={() => {
            let copy = [...layers];
            if (index === copy.length - 1) return;
            let temp = copy[index + 1];
            copy[index + 1] = copy[index];
            copy[index] = temp;
            setlayers([...copy]);
          }}
        >
          Move Down
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        {layer.img && (
          <ImageCustomizer
            src={layer.img.src}
            changeImg={(event) =>
              change2(event.target.value, layers, index, setlayers, "src")
            }
            changeH={(event) =>
              change2(event.target.value, layers, index, setlayers, "h")
            }
            changeW={(event) =>
              change2(event.target.value, layers, index, setlayers, "w")
            }
            changeX={(event) =>
              change2(event.target.value, layers, index, setlayers, "x")
            }
            changeY={(event) =>
              change2(event.target.value, layers, index, setlayers, "y")
            }
            changeRotation={(event) =>
              change2(event.target.value, layers, index, setlayers, "rotation")
            }
            h={layer.img.h}
            w={layer.img.w}
            x={layer.img.x}
            y={layer.img.y}
            rotation={layer.img.rotation}
            selected={layer.img.userCanCustomize}
            changeSelected={(event) =>
              change2(
                !layer.img.userCanCustomize,
                layers,
                index,
                setlayers,
                "userCanCustomize"
              )
            }
          />
        )}
        {layer.text && (
          <TextEditor
            content={layer.text.content}
            size={layer.text.size}
            family={layer.text.family}
            x={layer.text.x}
            y={layer.text.y}
            rotation={layer.text.rotation}
            color={layer.text.color}
            width={layer.text.width}
            changeContent={(event) =>
              change(event.target.value, layers, index, setlayers, "content")
            }
            changeFamily={(event) =>
              change(event.target.value, layers, index, setlayers, "family")
            }
            changeSize={(event) =>
              change(event.target.value, layers, index, setlayers, "size")
            }
            changeX={(event) =>
              change(event.target.value, layers, index, setlayers, "x")
            }
            changeY={(event) =>
              change(event.target.value, layers, index, setlayers, "y")
            }
            changeRotation={(event) =>
              change(event.target.value, layers, index, setlayers, "rotation")
            }
            changeColor={(event) =>
              change(event.target.value, layers, index, setlayers, "color")
            }
            changeWidth={(event) =>
              change(event.target.value, layers, index, setlayers, "width")
            }
            selected={layer.text.userCanCustomize}
            changeSelected={(event) =>
              change(
                !layer.text.userCanCustomize,
                layers,
                index,
                setlayers,
                "userCanCustomize"
              )
            }
          />
        )}
        {layer.gif && (
          <ImageCustomizer
            src={layer.gif.src}
            changeImg={(event) =>
              change3(event.target.value, layers, index, setlayers, "src")
            }
            changeH={(event) =>
              change3(event.target.value, layers, index, setlayers, "h")
            }
            changeW={(event) =>
              change3(event.target.value, layers, index, setlayers, "w")
            }
            changeX={(event) =>
              change3(event.target.value, layers, index, setlayers, "x")
            }
            changeY={(event) =>
              change3(event.target.value, layers, index, setlayers, "y")
            }
            changeRotation={(event) =>
              change3(event.target.value, layers, index, setlayers, "rotation")
            }
            h={layer.gif.h}
            w={layer.gif.w}
            x={layer.gif.x}
            y={layer.gif.y}
            rotation={layer.gif.rotation}
            gif={true}
            selected={layer.gif.userCanCustomize}
            changeSelected={(event) =>
              change3(
                !layer.gif.userCanCustomize,
                layers,
                index,
                setlayers,
                "userCanCustomize"
              )
            }
          />
        )}
        {layer.upl && (
          <UploadEditor
            src={layer.upl.src}
            changeImg={async (event) => {
              change4(
                URL.createObjectURL(event.target.files[0]),
                layers,
                index,
                setlayers,
                "src"
              );
            }}
            changeH={(event) =>
              change4(event.target.value, layers, index, setlayers, "h")
            }
            changeW={(event) =>
              change4(event.target.value, layers, index, setlayers, "w")
            }
            changeX={(event) =>
              change4(event.target.value, layers, index, setlayers, "x")
            }
            changeY={(event) =>
              change4(event.target.value, layers, index, setlayers, "y")
            }
            changeRotation={(event) =>
              change4(event.target.value, layers, index, setlayers, "rotation")
            }
            h={layer.upl.h}
            w={layer.upl.w}
            x={layer.upl.x}
            y={layer.upl.y}
            rotation={layer.upl.rotation}
            selected={layer.upl.userCanCustomize}
            changeSelected={(event) =>
              change4(
                !layer.upl.userCanCustomize,
                layers,
                index,
                setlayers,
                "userCanCustomize"
              )
            }
          />
        )}
        {layer.vid && (
          <VideoEditor
            src={layer.vid.src}
            changeImg={(event) =>
              change5(
                URL.createObjectURL(event.target.files[0]),
                layers,
                index,
                setlayers,
                "src"
              )
            }
            changeH={(event) =>
              change5(event.target.value, layers, index, setlayers, "h")
            }
            changeW={(event) =>
              change5(event.target.value, layers, index, setlayers, "w")
            }
            changeX={(event) =>
              change5(event.target.value, layers, index, setlayers, "x")
            }
            changeY={(event) =>
              change5(event.target.value, layers, index, setlayers, "y")
            }
            changeRotation={(event) =>
              change5(event.target.value, layers, index, setlayers, "rotation")
            }
            h={layer.vid.h}
            w={layer.vid.w}
            x={layer.vid.x}
            y={layer.vid.y}
            rotation={layer.vid.rotation}
            selected={layer.vid.userCanCustomize}
            changeSelected={(event) =>
              change5(
                !layer.vid.userCanCustomize,
                layers,
                index,
                setlayers,
                "userCanCustomize"
              )
            }
          />
        )}
      </div>
    </div>
  );
}
let change = (value, layers, index, setlayers, label) => {
  if (
    label === "x" ||
    label === "y" ||
    label === "rotation" ||
    label === "h" ||
    label === "w"
  )
    value = parseInt(value);
  let copy = [...layers];
  let toChange = copy[index];
  toChange.text[label] = value;
  copy[index] = toChange;
  setlayers([...copy]);
};
let change2 = (value, layers, index, setlayers, label) => {
  if (
    label === "x" ||
    label === "y" ||
    label === "rotation" ||
    label === "h" ||
    label === "w"
  )
    value = parseInt(value);
  let copy = [...layers];
  let toChange = copy[index];
  toChange.img[label] = value;
  copy[index] = toChange;
  setlayers([...copy]);
};
let change3 = (value, layers, index, setlayers, label) => {
  if (
    label === "x" ||
    label === "y" ||
    label === "rotation" ||
    label === "h" ||
    label === "w"
  )
    value = parseInt(value);
  let copy = [...layers];
  let toChange = copy[index];
  toChange.gif[label] = value;
  copy[index] = toChange;
  setlayers([...copy]);
};
let change4 = (value, layers, index, setlayers, label) => {
  if (
    label === "x" ||
    label === "y" ||
    label === "rotation" ||
    label === "h" ||
    label === "w"
  )
    value = parseInt(value);
  let copy = [...layers];
  let toChange = copy[index];
  toChange.upl[label] = value;
  copy[index] = toChange;
  setlayers([...copy]);
};
let change5 = (value, layers, index, setlayers, label) => {
  if (
    label === "x" ||
    label === "y" ||
    label === "rotation" ||
    label === "h" ||
    label === "w"
  )
    value = parseInt(value);
  let copy = [...layers];
  let toChange = copy[index];
  toChange.vid[label] = value;
  copy[index] = toChange;
  setlayers([...copy]);
};

export default LayerEditor;
