import faqs from "./data/faqs.js";
import Accordion from "./components/accordion/Accordion";

const App = () => {
  console.log(faqs)
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;

