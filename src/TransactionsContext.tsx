import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from './services/api'

type Transaction = {
  id: number
  title: string
  type: 'deposit' | 'withdraw'
  category: string
  amount: number
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

type TransactionsContextData = {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', { ...transactionInput, createdAt: new Date() })

    setTransactions([...transactions, response.data.transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
