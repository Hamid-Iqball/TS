import Counter from "./Components/Counter"
import Heading from "./Components/Heading"
import Section from "./Components/Section"


function App() {
  return (
    <div><Heading title="Hamid Iqbal"/>
    
    <Section title="Here is the Title">

      This is my Section


      <Counter/>
    </Section>
    </div>
  )
}

export default App