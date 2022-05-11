import { useState } from 'react'
import { FaBan, FaCheck } from 'react-icons/fa'
import { useNoteList } from '../../context/NoteListContext'

import './styles.css'

export default function NoteForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  console.log(title, description)

  const { noteList, setNoteList } = useNoteList()

  function handlerTitle(e) {
    setTitle(e.target.value)
  }

  function handlerDescription(e) {
    setDescription(e.target.value)
  }

  function handlerSubmit(e) {
    e.preventDefault()

    const id = String(Math.floor(Math.random() * 10000))

    setNoteList([...noteList, { id, title, description }])
  }

  return (
    <form className="note-menu">
      <div>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          placeholder="Informe um título"
          value={title}
          onChange={handlerTitle}
        />
      </div>

      <div>
        <label htmlFor="note">Nota</label>
        <textarea
          id="note"
          type="text"
          rows={10}
          placeholder="Escreva a sua nota"
          value={description}
          onChange={handlerDescription}
        />
      </div>

      <div className="buttons">
        <button className="cancel">
          <FaBan className="icon" />
        </button>

        <button className="confirm" type="submit" onClick={handlerSubmit}>
          <FaCheck className="icon" />
        </button>
      </div>
    </form>
  )
}
