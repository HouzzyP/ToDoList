import React, { useEffect, useState } from "react";
import { Inputbar } from "../components/InputBar";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const Delete = (e) => {
    let b = notes.filter((a) => a.index != e.target.value);
    setNotes(b);
    return;
  };
  const checkbox = (e) => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="inputBar-Container">
        <Inputbar
          setSearch={setSearch}
          search={search}
          setNotes={setNotes}
          notes={notes}
        />
        <ul class="notes-container">
          <div>
            {notes.map((a) => {
              return (
                <div className="notes">
                  <input value={a.index} onChange={checkbox} type="checkbox" />
                  <li key={a.index}>- {a.value}</li>

                  <button
                    className="btn-del"
                    value={a.index}
                    onClick={Delete}
                  />
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}
