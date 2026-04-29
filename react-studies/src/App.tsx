import { Greeting } from './components/Greeting';
import { Card } from './components/Card';

function App() {
  return (
    <>
      <Greeting name= "Gabriel"/>
      <Card title= "Card Title">
        <p>child prop number 1</p>
        <p>child prop number 2</p>
        <p>child prop number 3</p>
      </Card>
    </>
  )
}

export default App
