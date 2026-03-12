import React from "react";

function NoteItem(props) {

  const { note, deleteNote } = props;

  return (
    <div className="col-md-4">

      <div className="card m-2 p-3">

        <h5>{note.title}</h5>
        <p>{note.description}</p>

        <button
          className="btn btn-danger"
          onClick={() => deleteNote(note._id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default NoteItem;