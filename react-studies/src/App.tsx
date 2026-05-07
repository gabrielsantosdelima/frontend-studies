import { Greeting } from './components/Greeting';
import { Card } from './components/Card';
import { Counter } from './components/Counter';
import { TextMirror } from './components/TextMirror';
import { SumList } from './components/SumList';
import { RenderingList } from './components/RenderingList';

function App() {
  return (
    <>
      <Greeting name= "Gabriel"/>
      <Card title= "Card Title">
        <p>child prop number 1</p>
      </Card>
      
      <Card title= "Card Title 2">
        <ul>
          <li>child list number 1</li>
          <li>child list number 2</li>
        </ul>
      </Card>

      <Counter/>

      <TextMirror/>

      <SumList/>

      <RenderingList/>
    </>
  )
}

export default App
