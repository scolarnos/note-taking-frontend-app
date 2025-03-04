import React, { useState } from "react";
import Checkbox from "./Checkbox";
import styles from "./dashboard.module.css";

function Note(props) {
  const [isPinned, setIsPinned] = useState(false);

  function handleClick() {
    props.onDelete(props.id);
  }

  function handlePinChange() {
    setIsPinned(!isPinned);
    props.onPin(props.id, !isPinned);
  }

  return (
    <div className={styles.note}>
      <div className={styles.noteActions}>
        <Checkbox isPinned={isPinned} onChange={handlePinChange} />
      </div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;