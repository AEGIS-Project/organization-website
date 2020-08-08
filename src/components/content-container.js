import React from "react";

function ContentContainer({ children }) {
  return (
    <div
      style={{
        position: "relative",
        width: "70%",
        marginLeft: "15%",
      }}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
