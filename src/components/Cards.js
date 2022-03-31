import React from "react";
import "./css/cards.css";
export default function Cards(props) {
  const { title, desc, type, handleClick } = props;
  const cardClass = `card--container ${type}`;
  return (
    <div className={cardClass}>
      <h1>{title}</h1>
      {desc}
      <button type="button" onClick={() => handleClick(props)}>
        Next
      </button>
    </div>
  );
}
