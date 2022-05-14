import { Loading } from '@nextui-org/react'
import { useEffect, useRef, useState } from 'react'
import { FaBan, FaCheck } from 'react-icons/fa'
import { useHighlight } from '../../context/HighlightContext'
import { useNoteForm } from '../../context/NoteFormContext'
import { useNoteList } from '../../context/NoteListContext'
import { Input, Spacer } from '@nextui-org/react'

import './styles.css'

export default function NoteForm() {
  const inputRef = useRef(null)
  const [loading, setLoading] = useState(false)

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

    const isValidNote = validateFields()

    if (!isValidNote) {
      inputRef?.current?.focus()
      alert(`Preencha os campos`)
      return
    }

    setLoading(true)

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
    setLoading(false)
  }

  function validateFields() {
    if (title && description) {
      return true
    }
    return false
  }

  function saveLocalNotes() {
    localStorage.setItem('last-notes', JSON.stringify(noteList))
  }

  return (
    <form className="note-menu">
      <div>
        <label htmlFor="title">Título</label>
        <input
          ref={inputRef}
          id="title"
          type="text"
          placeholder="Informe um título"
          value={title}
          onChange={handlerTitle}
        />
        {/* <Input
          clearable
          bordered
          labelPlaceholder="Título"
          initialValue={title}
          value={title}
          onChange={handlerTitle}
        /> */}
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

        <button
          className="confirm"
          disabled={loading}
          type="submit"
          onClick={handlerSubmit}
        >
          {loading ? (
            <Loading color="currentColor" size="sm" />
          ) : (
            <FaCheck className="icon" />
          )}
        </button>
      </div>
    </form>
  )
}
