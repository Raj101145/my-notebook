import React, { useContext, useState } from "react";
import noteContext from "../context/notes/NotesContext";

const AddNote = () => {

  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "general"
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);

    setNote({
      title: "",
      description: "",
      tag: "general"
    });
  };

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>

      <form>

        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={onChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={note.description}
            onChange={onChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>Tag</label>
          <input
            type="text"
            name="tag"
            value={note.tag}
            onChange={onChange}
            className="form-control"
          />
        </div>

        <button
          disabled={note.title.length < 3 || note.description.length < 5}
          type="submit"
          onClick={handleClick}
          className="btn btn-primary"
        >
          Add Note
        </button>

      </form>
    </div>
  );
};

export default AddNote;