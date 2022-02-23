import { Container } from 'react-bootstrap'
import TickersPage  from '../TickersPage/TickersPage'
import { Header } from '../../styledComponents/styled.component'

const App = ()  => (
    <Container>
    <Header>React Finance </Header>
      <TickersPage  />
   </Container>
 
)

export default App
