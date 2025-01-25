import { useEffect, useState } from "react"
import Counter from "./Components/Counter"
import Heading from "./Components/Heading"
import Section from "./Components/Section"
import List from "./Components/ListItems"
import State from "./Components/State"


function App() {
    // const [count,setCount] = useState<number>(1)
    // const items = ['Hamid','Iqbal','isHere',4]




  return (
    <div><Heading title="Hamid Iqbal"/>
    <Section title="Here is the Title">
      This is my Section
    {/* <List items={items} render={(item:string|number)=>(<span className="gold">{item}</span>)} />
    <Counter setCount={setCount}>{count} </Counter> */}

    <State/>
    </Section>
    </div>
  )
}

export default App