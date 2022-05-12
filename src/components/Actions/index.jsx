import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa'
import { useHighlight } from '../../context/HighlightContext'
import { useNoteForm } from '../../context/NoteFormContext'
import { useNoteList } from '../../context/NoteListContext'

import './styles.css'

export default function Actions() {
  const { setVisibleForm, setTitle, setDescription } = useNoteForm()
  const { highlight, setHighlight } = useHighlight()
  const { noteList, setNoteList } = useNoteList()

  function toggleCreate() {
    setVisibleForm(true)
    clearValues()
    // if (visibleForm) {
    //   setVisibleForm(false)
    // } else {
    //   setVisibleForm(true)
    // }
  }

  function editHandler() {
    if (highlight) {
      const highlightedNote = noteList.find((note) => note.id === highlight)

      setTitle(highlightedNote.title)
      setDescription(highlightedNote.description)
      setVisibleForm(true)
    }
  }

  function deleteHandler() {
    if (highlight) {
      const highlightedNote = noteList.filter((note) => note.id !== highlight)
      clearValues()
      setNoteList(highlightedNote)
    }
  }

  function clearValues() {
    setTitle('')
    setDescription('')
    setHighlight(false)
  }

  return (
    <div className="actions">
      <button className="create" onClick={toggleCreate}>
        <FaPlus className="icon " />
      </button>

      <button className="edit" onClick={editHandler}>
        <FaPencilAlt className={`icon ${!highlight && 'disabled'}`} />
      </button>

      <button className="delete" onClick={deleteHandler}>
        <FaTrash className={`icon ${!highlight && 'disabled'}`} />
      </button>
    </div>
  )
}
