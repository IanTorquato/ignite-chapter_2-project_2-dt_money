import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from './services/api'

type Transaction = {
  id: number
  title: string
  type: 'deposit' | 'amount'
  category: string
  amount: number
  createdAt: string
}

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
