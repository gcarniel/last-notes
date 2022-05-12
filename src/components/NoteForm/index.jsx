import { useEffect } from 'react'
import { FaBan, FaCheck } from 'react-icons/fa'
import { useHighlight } from '../../context/HighlightContext'
import { useNoteForm } from '../../context/NoteFormContext'
import { useNoteList } from '../../context/NoteListContext'

import './styles.css'

export default function NoteForm() {
  const { noteList, setNoteList } = useNoteList()
  const { title, setTitle, description, setDescription, setVisibleForm } =
    useNoteForm()
  const { highlight, setHighlight } = useHighlight()

  useEffect(() => {
    saveLocalNotes()
  }, [noteList])

  function handlerTitle(e) {
    setTitle(e.target.value)
  }

  function handlerDescription(e) {
    setDescription(e.target.value)
  }

  function handlerSubmit(e) {
    e.preventDefault()

    if (highlight) {
      const highlightedNote = noteList.map((note) => {
        if (note.id === highlight) {
          return { ...note, title, description }
        }
        return note
      })

      setNoteList(highlightedNote)
      clearValues()
      return
    }

    const id = String(Math.floor(Math.random() * 10000))
    setNoteList([...noteList, { id, title, description }])
    clearValues()
  }

  function cancelHandler(e) {
    e.preventDefault()
    setHighlight(false)
    setVisibleForm(false)
  }

  function clearValues() {
    setTitle('')
    setDescription('')
    setHighlight(false)
  }

  function saveLocalNotes() {
    localStorage.setItem('last-notes', JSON.stringify(noteList))
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
        <button className="cancel" onClick={cancelHandler}>
          <FaBan className="icon" />
        </button>

        <button className="confirm" type="submit" onClick={handlerSubmit}>
          <FaCheck className="icon" />
        </button>
      </div>
    </form>
  )
}
