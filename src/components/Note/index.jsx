import { useHighlight } from '../../context/HighlightContext'
import { useNoteForm } from '../../context/NoteFormContext'
import { Card, Grid, Text, Divider, Button, Row } from '@nextui-org/react'

import './styles.css'
import { FaPencilAlt, FaTrash } from 'react-icons/fa'

export default function Note({ id, title, description }) {
  const { highlight, setHighlight } = useHighlight()
  const { setVisibleForm } = useNoteForm()

  function handleHigilightNote() {
    if (highlight === id) {
      setHighlight(false)
      setVisibleForm(false)
    } else {
      setHighlight(id)
      setVisibleForm(true)
    }
  }

  return (
    // <div
    //   id={id}
    //   className={`note ${highlight === id && 'highlight'}`}
    //   onClick={handleHigilightNote}
    // >
    //   <h2 className="title">{title}</h2>
    //   <hr />
    //   <p className="note-description">{description}</p>
    // </div>

    <Card
      id={id}
      className={`note ${highlight === id && 'highlight'}`}
      onClick={handleHigilightNote}
    >
      <Card.Header>
        <Text className="title">{title}</Text>
      </Card.Header>
      <Divider />
      <Card.Body css={{ py: '$10' }}>
        <Text className="note-description">{description}</Text>
      </Card.Body>
      <Divider />
      <Card.Footer>
        <Row justify="center">
          <Button size="sm" light>
            <FaPencilAlt />
          </Button>
          <Button size="sm" light color={'error'}>
            <FaTrash />
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  )
}
