import React from 'react'
import ReactDOM from 'react-dom'
import {createServer, Model} from 'miragejs'

import { App } from './App'

createServer({
  models: { transaction: Model },
  seeds(server) {
    server.db.loadData({
      transactions: [
        { 
          id: 1,
          title: 'Presente Ana',
          type: 'withdraw',
          category: 'Futura Familía',
          amount: 200,
          createdAt: new Date('2021-07-04 20:16:00')
        },
        { 
          id: 2,
          title: 'Salário Silbeck',
          type: 'deposit',
          category: 'Trabalho',
          amount: 1800,
          createdAt: new Date('2021-07-08 16:00:00')
        },
        { 
          id: 3,
          title: '1ª parcela Ignite React',
          type: 'withdraw',
          category: 'Investimento',
          amount: 600,
          createdAt: new Date('2021-07-12 12:40:00')
        },
        { 
          id: 4,
          title: 'Design do app PSCJ',
          type: 'withdraw',
          category: 'Investimento',
          amount: 160,
          createdAt: new Date('2021-07-24 16:00:00')
        },
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => this.schema.all('transaction'))

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
) 
