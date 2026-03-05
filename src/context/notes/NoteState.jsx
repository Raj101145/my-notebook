import React from "react";
import noteContext from "./NotesContext";

const NoteState = (props) => {
  const state = {
    name: "raj",
    class: "12A"
  };

  return (
    <noteContext.Provider value={state}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;