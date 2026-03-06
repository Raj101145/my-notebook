import React from "react";
import NoteItem from "./NoteItem";

function Notes() {

  const notes = [
  
    {
      _id: 1,
      title: "Learn React",
      description: "Practice hooks"
    },
    {
      _id: 2,
      title: "Learn Node",
      description: "Build backend APIs"
    }
   
  ];

  return (
    <div className="row justify-content-center">

      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} />
      })}

    </div>
  );
}

export default Notes;