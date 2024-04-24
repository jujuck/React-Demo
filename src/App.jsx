import "./App.css";

import Section from "./components/Section";

function App() {
  return (
    <>
      <h1>TITRE</h1>
      <main className="main">
        <Section />
        <Section />
        <Section />
      </main>
      <footer>
        <p>Pied de page</p>
      </footer>
    </>
  );
}

export default App;
