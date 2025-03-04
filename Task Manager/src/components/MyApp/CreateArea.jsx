import React, { useState } from "react";
import styles from "./dashboard.module.css"; // Import the dashboard module CSS

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    const newNote = {
      ...note,
      _id: Date.now().toString(),
    };
    props.onAdd(newNote);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className={styles.form}>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          value={note.content}
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;