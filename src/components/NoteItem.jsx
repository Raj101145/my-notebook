import React from "react";

function NoteItem(props) {
  const { note } = props;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>

          <p className="card-text">{note.description}</p>

          <button className="btn btn-sm btn-danger mx-1">Delete</button>

          <button className="btn btn-sm btn-primary mx-1">Edit</button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
