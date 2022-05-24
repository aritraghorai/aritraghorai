import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Work from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contacts />
    </div>
  );
}

export default App;
