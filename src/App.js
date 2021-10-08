import About from "./components/About/About";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <main>
        <Projects />
        <About />
      </main>
    </div>
  );
}

export default App;
