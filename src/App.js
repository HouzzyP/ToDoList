import React, { useEffect, useState, Fragment } from "react";
import { Inputbar } from "../components/InputBar";
import { useForceUpdate } from "./ForceUpdate";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const forceUpdate = useForceUpdate();

  const Delete = (e) => {
    let b = notes.filter((a) => a.index != e.target.value);
    console.log(b);
    setNotes(b);
    return;
  };

  const Checked = (e) => {
    let b = notes.filter((a) => a.index == e.target.value)[0];
    notes.map((note) => {
      if (note.index === b.index) {
        console.log(note.check);
        if (note.check === "note") {
          note.check = "note-checked";
        } else {
          note.check = "note";
        }
        forceUpdate();
      }
    });
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
        <ul>
          <Fragment>
            {notes.map((a) => {
              return (
                <div className="notes">
                  <li className={a.check} key={a.index}>
                    {a.value}
                  </li>
                  <div className="btn-container">
                    <button
                      value={a.index}
                      onClick={Checked}
                      className="btn-check"
                      name={a.check}
                    >
                      ✓
                    </button>
                    <button
                      className="btn-del"
                      value={a.index}
                      onClick={Delete}
                      name="asd"
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            })}
          </Fragment>
        </ul>
      </div>
    </div>
  );
}
