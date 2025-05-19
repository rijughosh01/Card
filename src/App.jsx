import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDesign2 from "./sampleOfCard/cardOfLaptop";
import Badge from "./sampleOfCard/Badge";
import ProductDesign from "./sampleOfCard/ProductDesign";
import TShirtCard from "./sampleOfCard/T-shirtCard";
import TShirtCardList from "./sampleOfCard/TShirtCardList";
import CardImage from "./sampleOfCard/cardImage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <ProductCard />
        <ProductDesign2 />
        <Badge />
        <ProductDesign />
        <TShirtCard />
        <TShirtCardList />
        <CardImage />
      </main>
    </div>
  );
}

export default App;
