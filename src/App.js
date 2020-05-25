import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Todo");
  const [add, setAdd] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    setItems(items.concat([add]));
    setAdd("");
  };

  const remove = (e, index) => {
    if (e) {
      e.preventDefault();
    }
    setItems(items.splice(index));
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          className="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <form onSubmit={handleSubmit}>
          <input
            value={add}
            onChange={(e) => {
              setAdd(e.target.value);
            }}
          />
        </form>
        <ul>
          {items.map((value, index) => {
            return (
              <li key={index}>
                {value}
                <button
                  onClick={(e) => {
                    remove(e, index);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
