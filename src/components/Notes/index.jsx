import './styles.css'

import Note from '../Note'
import { useHighlight } from '../../context/HighlightContext'
import { useNoteList } from '../../context/NoteListContext'
import { useEffect } from 'react'
import { useNoteForm } from '../../context/NoteFormContext'

export default function Notes() {
  const { highlight, setHighlight } = useHighlight()
  const { noteList, setNoteList } = useNoteList()
  const { setVisibleForm, setTitle, setDescription } = useNoteForm()

  useEffect(() => {
    getLocalNotes()
  }, [])

  useEffect(() => {
    if (highlight) {
      const highlightedNote = noteList.find((note) => note.id === highlight)

      setTitle(highlightedNote.title)
      setDescription(highlightedNote.description)
      setVisibleForm(true)
    } else {
      setTitle('')
      setDescription('')
    }
  }, [highlight])

  function getLocalNotes() {
    const notesSaved = localStorage.getItem('last-notes')
    const localNotes = JSON.parse(notesSaved) || []

    setNoteList(localNotes)
  }

  return (
    <section className="notes">
      {noteList?.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            description={note.description}
            highlight={highlight}
            setHighlight={setHighlight}
          />
        )
      })}
    </section>
  )
}
