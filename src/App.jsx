import "./App.css";
import ProductCard from "./components/ProductCard";
import ProductDesign2 from "./sampleOfCard/cardOfLaptop";
import Badge from "./sampleOfCard/Badge";
import ProductDesign from "./sampleOfCard/ProductDesign";
import TShirtCard from "./sampleOfCard/T-shirtCard";
import TShirtCardList from "./sampleOfCard/TShirtCardList";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="gradient-text">Product Card</h1>
      </header>
      <main>
        <ProductCard />
        <ProductDesign2 />
        <Badge />
        <ProductDesign />
        <TShirtCard />
        <TShirtCardList />
      </main>
    </div>
  );
}

export default App;
