import { createContext, useContext, useState } from 'react'

const NoteListContext = createContext()

export default function NoteListProvider({ children }) {
  const [noteList, setNoteList] = useState([])
  return (
    <NoteListContext.Provider value={{ noteList, setNoteList }}>
      {children}
    </NoteListContext.Provider>
  )
}

export const useNoteList = () => useContext(NoteListContext)
