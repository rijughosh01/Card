import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="gradient-text">Product Card</h1>
      </header>
      <main>
        <ProductCard />
      </main>
    </div>
  );
}

export default App;
