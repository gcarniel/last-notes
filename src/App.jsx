import Actions from './components/Actions'
import Header from './components/Header'
import Logo from './components/Logo'
import Notes from './components/Notes'
import NotesArea from './components/NotesArea'
import HighlightProvider from './context/HighlightContext'
import NoteListProvider from './context/NoteListContext'
import NoteFormProvider from './context/NoteFormContext'

import { NextUIProvider } from '@nextui-org/react'

function App() {
  return (
    <NextUIProvider>
      <NoteFormProvider>
        <NoteListProvider>
          <HighlightProvider>
            <Header>
              <Logo />
              <Actions />
            </Header>
            <NotesArea>
              <Notes />
            </NotesArea>
          </HighlightProvider>
        </NoteListProvider>
      </NoteFormProvider>
    </NextUIProvider>
  )
}

export default App
