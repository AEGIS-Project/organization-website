import React from "react";

export default function ReminderToScroll({ text }) {
  return (
    <div>
      <div
        style={{
          borderLeft: "6px #e6ffff",
          height: "50px",
        }}
      ></div>
      <div> {text} </div>
    </div>
  );
}
