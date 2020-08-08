import React from "react";

export default function FillSpace({ backgroundColor, children }) {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        backgroundColor: `${backgroundColor}`,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}
