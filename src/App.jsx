import { createSignal } from 'solid-js'
import './App.css'
import ColorPicker from './ColorPicker'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
     <div className="App"> 
      <h1>Color Picker</h1> 
      <ColorPicker /> 
    </div>
    
    </>
  )
}

export default App
