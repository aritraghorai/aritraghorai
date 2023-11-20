import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Work from "./Components/Projects";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App dark:bg-myColor bg-white">
      <Navbar />
      <div className="flex flex-col gap-4">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
};

export default App;
