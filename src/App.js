import About from "./components/About/About";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
