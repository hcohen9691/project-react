import React from "react";

export default function ButtonComponent({ textButton, clickButton }) {

  return (
    <button onClick={() => clickButton('')} className="btn btn-primary w-10">{textButton}</button>
  )
}