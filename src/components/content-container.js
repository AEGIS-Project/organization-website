import React from "react";

function ContentContainer({ children }) {
  return (
    <div
      style={{
        position: "relative",
        width: "60%",
        marginLeft: "20%",
      }}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
