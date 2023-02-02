import React, { useState } from "react";

const App = () => {
   const [result , setResult]= useState("");
  return (
    <>
     <div className="conatiner">
       <form>
        <input type="text" value={result}>
          
        </input>
       </form>

       <div className="keypad">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
       </div>
     </div>
    </>
  )
}

export default App;