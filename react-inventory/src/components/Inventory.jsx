import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 0,
    notebooks: 0,
    pens: 0,
    inkpens:0,
  });

  const handleBooks = (value)=>{
    setInv({...inv, books:inv.books+value});
  }
  const handleNoteBooks = (value)=>{
    setInv({...inv, notebooks:inv.notebooks+value});
  }
  const handlePens = (value)=>{
    setInv({...inv, pens:inv.pens+value});
  }
  const handleInk = (value)=>{
    setInv({...inv, inkpens:inv.inkpens+value});
  }
    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "4px solid black",
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin:"42px",
        textAlign:"center",
        fontWeight:"bold"
      }}
    >
      <div className="items">
        <span>Books:</span>
        <button className="circlularButton" onClick={()=>handleBooks(+1)}>+</button>
        <button className="circlularButton" onClick={()=>handleBooks(-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>handleNoteBooks(+1)}>+</button>
        <button className="circlularButton" onClick={()=>handleNoteBooks(-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>handlePens(+1)}>+</button>
        <button className="circlularButton" onClick={()=>handlePens(-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>handleInk(+1)}>+</button>
        <button className="circlularButton" onClick={()=>handleInk(-1)}>-</button>
        <span>{inv.inkpens}</span>
      </div>
      Total: {inv.books+inv.notebooks+inv.pens+inv.inkpens}
    </div>
  );
};