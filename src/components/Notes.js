import React, { Fragment } from "react";

export const Notes = (props) => {
  const { notes } = props;

  const addNote = () => {
    return <p>{notes}</p>;
  };

  return <Fragment>{addNote}</Fragment>;
};
