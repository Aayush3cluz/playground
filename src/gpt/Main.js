import React, { useState } from "react";
import Inputs from "./Inputs";
import Outputs from "./Outputs";
function Main() {
  const [state, setState] = useState({ m1: "", m2: "", m3: "", gifs: [] });
  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/3">
        <Inputs state={state} setState={setState}></Inputs>
      </div>

      <div className="w-1/2">
        <Outputs state={state}></Outputs>
      </div>
    </div>
  );
}

export default Main;
