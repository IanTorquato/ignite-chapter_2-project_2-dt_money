import Modal from 'react-modal'

import { ModalProps } from '../../App'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionModalContainer } from './styles'

export const NewTransactionModal = ({ isOpen, onRequestClose }: ModalProps) => {
  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button className="react-modal-close" type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>  

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionModalContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
          </button>
          
          <button type="button">
            <img src={outcomeImg} alt="Saída" />
          </button>
        </TransactionModalContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
