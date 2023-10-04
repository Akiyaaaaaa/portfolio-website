import "./App.scss";
import { About, Footer, Header, Skills, Works } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Works />
        <Skills />
        <Footer />
      </div>
    </>
  );
}

export default App;
