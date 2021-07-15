import { useEffect, useState } from 'react'

import { api } from '../../services/api'
import { Container } from './styles'

export type Transaction = {
  id: number
  title: string
  type: 'deposit' | 'amount'
  category: string
  amount: number
  createdAt: string
}

export const TransactionTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat(
                  'pt-br', { style: 'currency', currency: 'BRL' }
                ).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
