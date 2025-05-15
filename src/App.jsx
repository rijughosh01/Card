import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1
          style={{
            color: "black",
            fontWeight: "lighter",
            fontFamily: "sans-serif",
          }}
        >
          Product Card
        </h1>
      </header>
      <main>
        <ProductCard />
      </main>
    </div>
  );
}

export default App;
