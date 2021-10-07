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
      </main>
    </div>
  );
}

export default App;
