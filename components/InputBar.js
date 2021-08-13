import { useState } from "react";

export const Inputbar = (props) => {
  const [index, setIndex] = useState(0);
  const { search, setSearch, setNotes, notes } = props;
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (search !== "") {
      setNotes([
        ...notes,
        {
          index: index,
          value: search,
          check: false
        }
      ]);
    }
    setIndex(index + 1);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form-container">
        <div className="input-container">
          <input
            maxLength="45"
            type="text"
            placeholder="Note..."
            className="input"
            value={search}
            onChange={onChange}
          ></input>
        </div>
        <div>
          <button className="button">+</button>
        </div>
      </form>
    </div>
  );
};
