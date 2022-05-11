import { useHighlight } from '../../context/HighlightContext'
import './styles.css'

export default function Note({ id, title, description }) {
  const { highlight, setHighlight } = useHighlight()
  return (
    <div
      className={`note ${highlight ? 'highlight' : ''}`}
      onClick={() => {
        setHighlight(!highlight)
      }}
    >
      <h2 className="title">{title}</h2>
      <hr />
      <p className="note-description">{description}</p>
    </div>
  )
}
