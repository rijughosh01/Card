import "./App.css";
import ProductCard from "./components/ProductCard";
import ProductDesign from "./sampleOfCard/ProductDesign";
import ProductDesign2 from "./sampleOfCard/cardOfLaptop";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="gradient-text">Product Card</h1>
      </header>
      <main>
        <ProductCard />
        <ProductDesign />
        <ProductDesign2 />
      </main>
    </div>
  );
}

export default App;
