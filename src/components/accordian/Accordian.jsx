import React from "react";
import { useState } from "react";
import data from "./data";
import "./accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getItemId) => {
    setSelected(getItemId === selected ? null : getItemId);
  };
  const handleMultiSelection = (getItemId) => {
    let copyMultiple = [...multiple];
    const index = copyMultiple.indexOf(getItemId);
    console.log(index);
    if(index === -1){
      copyMultiple.push(getItemId);
    }
    else{
      copyMultiple.splice(index, 1) // If the item is already selected, deselect it
    }
    setMultiple(copyMultiple);
  };
  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
      {enableMultiSelection ? "Disable" : "Enable"} Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              <div>
                {
                enableMultiSelection ? 
                multiple.includes(item.id) &&
                (<div className="content">{item.answer}</div>)
                 : selected === item.id && 
                 (<div className="content">{item.answer}</div>)
                 }
             
              </div>
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
