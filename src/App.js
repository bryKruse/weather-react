import "./App.css";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <br />
        <p>
          Open-source
          <a href="" alt="link to GitHub" target="_blank" rel="noreferrer">
            code
          </a>
          by Brynn Kruse
        </p>
      </header>
    </div>
  );
}

export default App;
