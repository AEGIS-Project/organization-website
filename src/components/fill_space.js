import React from "react";

export default function FillSpace({
  backgroundColor,
  children,
  height = "100vh",
  background,
}) {
  return (
    <div
      style={{
        position: "relative",
        height: `${height}`,
        width: "100%",
        backgroundColor: `${backgroundColor}`,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        background: `${background}`,
      }}
    >
      {children}
    </div>
  );
}
