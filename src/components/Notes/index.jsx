import './styles.css'

import Note from '../Note'
import { useHighlight } from '../../context/HighlightContext'
import { useNoteList } from '../../context/NoteListContext'

export default function Notes() {
  const { highlight, setHighlight } = useHighlight()
  const { noteList, setNoteList } = useNoteList()
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
