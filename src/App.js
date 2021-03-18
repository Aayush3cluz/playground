import React, { useState } from "react";
import { Button, Grid, Input, TextField } from "@material-ui/core";
import { Image, Transformation } from "cloudinary-react";

const TextOverlay = ({
  size,
  content,
  color,
  updateSize,
  updateContent,
  updateColor,
  x,
  y,
  angle,
  font,
  updateX,
  updateY,
  updateAngle,
  updateFont,
}) => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Text Size"
        value={size}
        onChange={(event) => updateSize(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="filled-basic"
        label="Text Color"
        variant="filled"
        value={color}
        onChange={(event) => updateColor(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="Text content"
        variant="outlined"
        value={content}
        onChange={(event) => updateContent(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="X"
        variant="outlined"
        value={x}
        onChange={(event) => updateX(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="Y"
        variant="outlined"
        value={y}
        onChange={(event) => updateY(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="Angle"
        variant="outlined"
        value={angle}
        onChange={(event) => updateAngle(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="Angle"
        variant="outlined"
        value={angle}
        onChange={(event) => updateAngle(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="Font"
        variant="outlined"
        value={font}
        onChange={(event) => updateFont(event.target.value)}
        style={{ width: 100 }}
      />
    </form>
  );
};
const ImageOverLay = ({
  x,
  y,
  width,
  cloudName,
  publicId,
  angle,
  height,
  updateX,
  updateY,
  updateWidth,
  updateCloud,
  updateId,
  updateAngle,
  updateHeight,
}) => {
  return (
    <form>
      <TextField
        id="outlined-basic"
        label="x"
        variant="outlined"
        value={x}
        onChange={(event) => updateX(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="y"
        variant="outlined"
        value={y}
        onChange={(event) => updateY(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="width"
        variant="outlined"
        value={width}
        onChange={(event) => updateWidth(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="height"
        variant="outlined"
        value={height}
        onChange={(event) => updateHeight(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="cloudName"
        variant="outlined"
        value={cloudName}
        onChange={(event) => updateCloud(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="publicId"
        variant="outlined"
        value={publicId}
        onChange={(event) => updateId(event.target.value)}
        style={{ width: 100 }}
      />
      <TextField
        id="outlined-basic"
        label="angle"
        variant="outlined"
        value={angle}
        onChange={(event) => updateAngle(event.target.value)}
        style={{ width: 100 }}
      />
    </form>
  );
};

function App() {
  const [state, setstate] = useState({
    textOverLaysUI: [],
    textOverLaysActual: [],
    originalImage: { cloudName: "demo", publicName: "flowers.jpg" },
    imageOverLaysUI: [],
    imageOverLaysActual: [],
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          flexDirection: "row",
          marginRight: 40,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Cloud Name"
          variant="outlined"
          value={state.originalImage.cloudName}
          onChange={(event) =>
            setstate({
              ...state,
              originalImage: {
                ...state.originalImage,
                cloudName: event.target.value,
              },
            })
          }
        />
        <TextField
          id="outlined-basic"
          label="Public Id"
          variant="outlined"
          value={state.originalImage.publicName}
          onChange={(event) =>
            setstate({
              ...state,
              originalImage: {
                ...state.originalImage,
                publicName: event.target.value,
              },
            })
          }
        />
        <Button
          onClick={() => {
            console.log(state);
          }}
        >
          Log state
        </Button>
        <Image
          publicId={state.originalImage.publicName}
          cloudName={state.originalImage.cloudName}
        >
          <Transformation width="500" height="500" crop="scale" />
          {state.imageOverLaysActual.length > 0
            ? state.imageOverLaysActual.map((dets) => {
                return (
                  <Transformation
                    overlay={{
                      cloudName: dets.cloudName,
                      publicId: dets.publicId,
                    }}
                    width={dets.width}
                    x={dets.x}
                    y={dets.y}
                    angle={dets.angle}
                    height={dets.height}
                  />
                );
              })
            : null}

          {state.textOverLaysActual.length > 0
            ? state.textOverLaysActual.map((dets) => {
                return (
                  <Transformation
                    overlay={{
                      fontFamily: dets.font,
                      fontSize: dets.text_size,
                      fontWeight: "bold",
                      text: dets.text_content,
                    }}
                    color={dets.text_color}
                    x={dets.x}
                    y={dets.y}
                    angle={dets.angle}
                  />
                );
              })
            : null}
        </Image>
      </div>
      <Button
        onClick={() =>
          setstate({
            ...state,
            textOverLaysUI: [...state.textOverLaysUI, init()],
            textOverLaysActual: [...state.textOverLaysActual, init()],
          })
        }
      >
        Add text overlay
      </Button>
      <Button
        onClick={() =>
          setstate({
            ...state,
            imageOverLaysUI: [...state.imageOverLaysUI, initImage()],
            imageOverLaysActual: [...state.imageOverLaysActual, initImage()],
          })
        }
      >
        Add image overlay
      </Button>
      {state.textOverLaysUI.length > 0 ? (
        <>
          {state.textOverLaysUI.map((dets, index) => {
            return (
              <TextOverlay
                key={index}
                color={dets.text_color}
                content={dets.text_content}
                size={dets.text_size}
                x={dets.x}
                y={dets.y}
                angle={dets.angle}
                font={dets.font}
                updateColor={(value) => {
                  let overlay = [...state.textOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, text_color: value };
                  overlay[index] = toChange;
                  setstate({ ...state, textOverLaysUI: overlay });
                }}
                updateContent={(value) => {
                  let overlay = [...state.textOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, text_content: value };
                  overlay[index] = toChange;
                  setstate({ ...state, textOverLaysUI: overlay });
                }}
                updateSize={(value) => {
                  let overlay = [...state.textOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, text_size: value };
                  overlay[index] = toChange;
                  setstate({ ...state, textOverLaysUI: overlay });
                }}
                updateX={(value) => {
                  let overlay = [...state.textOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, x: value };
                  overlay[index] = toChange;
                  setstate({ ...state, textOverLaysUI: overlay });
                }}
                updateY={(value) => {
                  let overlay = [...state.textOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, y: value };
                  overlay[index] = toChange;
                  setstate({ ...state, textOverLaysUI: overlay });
                }}
                updateAngle={(value) => {
                  let overlay = [...state.textOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, angle: value };
                  overlay[index] = toChange;
                  setstate({ ...state, textOverLaysUI: overlay });
                }}
                updateFont={(value) => {
                  let overlay = [...state.textOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, font: value };
                  overlay[index] = toChange;
                  setstate({ ...state, textOverLaysUI: overlay });
                }}
              />
            );
          })}
          <Button
            onClick={() =>
              setstate({
                ...state,
                textOverLaysActual: state.textOverLaysUI,
              })
            }
          >
            Update Text Overlay
          </Button>
        </>
      ) : null}
      {state.imageOverLaysUI.length > 0 ? (
        <>
          {state.imageOverLaysUI.map((dets, index) => {
            return (
              <ImageOverLay
                cloudName={dets.cloudName}
                publicId={dets.publicId}
                x={dets.x}
                y={dets.y}
                width={dets.width}
                angle={dets.angle}
                height={dets.height}
                updateCloud={(value) => {
                  let overlay = [...state.imageOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, cloudName: value };
                  overlay[index] = toChange;
                  setstate({ ...state, imageOverLaysUI: overlay });
                }}
                updateId={(value) => {
                  let overlay = [...state.imageOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, publicId: value };
                  overlay[index] = toChange;
                  setstate({ ...state, imageOverLaysUI: overlay });
                }}
                updateWidth={(value) => {
                  let overlay = [...state.imageOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, width: value };
                  overlay[index] = toChange;
                  setstate({ ...state, imageOverLaysUI: overlay });
                }}
                updateX={(value) => {
                  let overlay = [...state.imageOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, x: value };
                  overlay[index] = toChange;
                  setstate({ ...state, imageOverLaysUI: overlay });
                }}
                updateY={(value) => {
                  let overlay = [...state.imageOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, y: value };
                  overlay[index] = toChange;
                  setstate({ ...state, imageOverLaysUI: overlay });
                }}
                updateAngle={(value) => {
                  let overlay = [...state.imageOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, angle: value };
                  overlay[index] = toChange;
                  setstate({ ...state, imageOverLaysUI: overlay });
                }}
                updateHeight={(value) => {
                  let overlay = [...state.imageOverLaysUI];
                  let toChange = overlay[index];
                  toChange = { ...toChange, height: value };
                  overlay[index] = toChange;
                  setstate({ ...state, imageOverLaysUI: overlay });
                }}
              />
            );
          })}
          <Button
            onClick={() =>
              setstate({
                ...state,
                imageOverLaysActual: state.imageOverLaysUI,
              })
            }
          >
            Update Image Overlay
          </Button>
        </>
      ) : null}
    </div>
  );
}
const init = () => {
  return {
    text_size: 50,
    text_color: "#FFFF0080",
    x: 0,
    y: 0,
    text_content: "ABCDEFG",
    angle: 0,
    font: "Times",
  };
};
const initImage = () => {
  return {
    cloudName: "demo",
    publicId: "sample.jpg",
    width: 200,
    height: 200,
    x: 0,
    y: 0,
    angle: 0,
  };
};
export default App;
