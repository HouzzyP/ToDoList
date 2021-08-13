import React from "react";

export const Notes = (props) => {
  const { notes } = props;
  const addNote = () => {
    return <p>{notes}</p>;
  };

  return <div>{addNote}</div>;
};
