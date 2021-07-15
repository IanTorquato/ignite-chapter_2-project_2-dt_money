import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { ModalProps } from '../../App'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, RadioBox, TransactionModalContainer } from './styles'

export const NewTransactionModal = ({ isOpen, onRequestClose }: ModalProps) => {
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    console.log( type, title, value, category )
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>  

        <input placeholder="Título"  onChange={({ target }) => setTitle(target.value)} />
        <input type="number" placeholder="Valor"  onChange={({ target }) => setValue(Number(target.value))} />

        <TransactionModalContainer>
          <RadioBox type="button" onClick={() => setType('deposit')} isActive={type === 'deposit'} activeColor="green">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          
          <RadioBox type="button" onClick={() => setType('withdraw')} isActive={type === 'withdraw'} activeColor="red">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionModalContainer>

        <input placeholder="Categoria"  onChange={({ target }) => setCategory(target.value)} />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
