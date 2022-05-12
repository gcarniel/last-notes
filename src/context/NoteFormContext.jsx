import { createContext, useContext, useState } from 'react'

const NoteFormContext = createContext()

export default function NoteListProvider({ children }) {
  const [visibleForm, setVisibleForm] = useState(false)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <NoteFormContext.Provider
      value={{
        visibleForm,
        setVisibleForm,
        title,
        setTitle,
        description,
        setDescription,
      }}
    >
      {children}
    </NoteFormContext.Provider>
  )
}

export const useNoteForm = () => useContext(NoteFormContext)
