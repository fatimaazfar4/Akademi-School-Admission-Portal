import React from "react";

export default function MessageBubble({ Color, Message, Date, txtColor }) {
  return (
    <>
      <div
        className="  p-4   my-3 mx-5 rounded-xl "
        style={{ background: Color }}
      >
        <p style={{ color: txtColor }}>{Message}</p>
      </div>
      <p className=" px-8 text-sm text-[#A098AE]">{Date}</p>
    </>
  );
}
