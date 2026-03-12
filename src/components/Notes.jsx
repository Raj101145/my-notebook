import React, { useState } from "react";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

function Notes() {

  const [notes, setNotes] = useState([
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
  ]);

  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  const handleAddNote = (e) => {
    e.preventDefault();

    const newNote = {
      _id: Date.now(),
      title: note.title,
      description: note.description
    };

    setNotes([...notes, newNote]);

    setNote({
      title: "",
      description: ""
    });
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note._id !== id);
    setNotes(updatedNotes);
  };

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">

      <h2 className="mb-3">Add a Note</h2>

      <form onSubmit={handleAddNote} className="mb-4">

        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control mb-2"
          value={note.title}
          onChange={onChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="form-control mb-2"
          value={note.description}
          onChange={onChange}
        />

        <button className="btn btn-primary">Add Note</button>

      </form>

      <div className="row justify-content-center">

        {notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            deleteNote={handleDelete}
          />
        ))}

      </div>

    </div>
  );
}

export default Notes;