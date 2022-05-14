import {
  Modal,
  Button,
  Text,
  Input,
  Textarea,
  Grid,
  Spacer,
} from '@nextui-org/react'

export default function ModalForm({ visible, setVisible }) {
  const closeHandler = () => {
    setVisible(false)
  }

  return (
    <div>
      <Modal
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Last Notes
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Spacer y={0.5} />
          <Input
            bordered
            labelPlaceholder="Escreva um título"
            color="secondary"
          />
          <Spacer y={0.5} />
          <Textarea
            bordered
            color="secondary"
            labelPlaceholder="Escreva sua nota"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Fechar
          </Button>
          <Button auto onClick={closeHandler}>
            Gravar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
