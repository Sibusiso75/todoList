import React from "react";
import ReactLoading from "react-loading";
function Loading() {
  return (
    <div style={{ margin: "40px" }}>
      <span>
        <ReactLoading
          type={"spokes"}
          color={"orange"}
          height={"15%"}
          width={"8%"}
        />
        <b>Loading . . . </b>
      </span>
    </div>
  );
}

export default Loading;
