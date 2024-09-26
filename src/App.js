import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Pops</footer>
      </div>
    </div>
  );
}
