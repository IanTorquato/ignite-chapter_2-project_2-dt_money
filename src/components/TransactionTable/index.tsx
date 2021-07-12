import { Container } from './styles'

export const TransactionTable = () => {
  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
            <td></td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.200</td>
            <td>Casa</td>
            <td>17/02/2021</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
