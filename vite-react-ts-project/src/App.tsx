import { useState } from "react"
import Counter from "./Components/Counter"
import Heading from "./Components/Heading"
import Section from "./Components/Section"


function App() {
      const [count,setCount] = useState<number>(1)
  return (
    <div><Heading title="Hamid Iqbal"/>
    
    <Section title="Here is the Title">

      This is my Section


      <Counter setCount={setCount}>{count} </Counter>
    </Section>
    </div>
  )
}

export default App