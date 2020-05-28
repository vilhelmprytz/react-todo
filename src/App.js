import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Todo");
  const [add, setAdd] = useState("");
  const [items, setItems] = useState(["Hello", "World"]);

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

    setItems(
      items.filter(function (item, i) {
        return i !== index;
      })
    );
  };

  const update = (e, index) => {
    if (e) {
      e.preventDefault();
    }

    let temporary = [...items];
    let item = { ...temporary[index] };
    item = e.target.value;
    temporary[index] = item;
    setItems(temporary);
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
                <input
                  className="item"
                  value={value}
                  onChange={(e) => {
                    update(e, index);
                  }}
                />
                <button
                  className="glow-on-hover"
                  onClick={(e) => {
                    remove(e, index);
                  }}
                >
                  Remove
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
