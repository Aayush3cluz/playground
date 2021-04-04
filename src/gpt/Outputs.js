import React, { useEffect, useState } from "react";

function Outputs({ state }) {
  //   const [images, setImages] = useState([]);
  //   useEffect(() => {
  //     let i = state.gifs.map((gif) => {
  //       return gif.map((g) => {
  //         let downloadedImg = new Image();
  //         downloadedImg.crossOrigin = "Anonymous";
  //         downloadedImg.addEventListener("load", imageReceived, false);
  //         downloadedImg.src = imageURL;
  //       });
  //     });
  //   }, [state]);
  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="w-9/12 h-32 shadow-lg rounded-xl p-4">
        M1:{`${state.m1}`}
      </div>
      <div className="w-9/12 h-32 shadow-lg rounded-xl p-4">
        M2:{`${state.m2}`}
      </div>
      <div className="w-9/12 h-32 shadow-lg rounded-xl p-4">
        M3:{`${state.m3}`}
      </div>
      <div className="flex flex-col space-y-4">
        {state.gifs.length > 0 &&
          state.gifs.map((gif) => {
            return (
              <div className="flex flex-row space-x-4">
                {gif.map((g) => {
                  return <img className="w-28 h-28" src={g} alt="loading..." />;
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Outputs;
