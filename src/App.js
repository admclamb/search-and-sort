import "./App.css";
import Graph from "./components/Graph";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main">
        <Graph />
      </main>
    </>
  );
}

export default App;
