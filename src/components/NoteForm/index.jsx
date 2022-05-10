import { FaBan, FaCheck } from "react-icons/fa";

import "./styles.css";

export default function NoteForm() {
  return (
    <form className="note-menu">
      <div>
        <label htmlFor="title">Título</label>
        <input id="title" type="text" placeholder="Informe um título" />
      </div>

      <div>
        <label htmlFor="note">nota</label>
        <textarea
          id="note"
          type="text"
          rows={10}
          placeholder="Escreva a sua nota"
        />
      </div>

      <div className="buttons">
        <button className="cancel">
          <FaBan className="icon" />
        </button>

        <button className="confirm" type="submit">
          <FaCheck className="icon" />
        </button>
      </div>
    </form>
  );
}
