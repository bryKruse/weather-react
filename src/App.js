import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <br />
        <p>
          <a
            href="https://github.com/bryKruse/weather-react"
            alt="link to GitHub"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sourced code
          </a>{" "}
          by Brynn Kruse
        </p>
      </header>
    </div>
  );
}

export default App;
