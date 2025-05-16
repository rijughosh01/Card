import "./ProductCard.css";
import ProductImageSlider from "./ProductImageSlider";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <ProductImageSlider />
      </div>
      <div className="card-details">
        <div className="product-name">
          MSI Optix G241V E2 24&quot; FHD FreeSync IPS Esports Gaming Monitor
        </div>
        <div className="rating">★★★★☆ (126 review)</div>
        <ul className="features">
          <h2>Key Features</h2>
          <li>
            <strong>Model:</strong> Optix G241V E2
          </li>
          <li>
            <strong>Resolution:</strong> FHD (1920 x 1080)
          </li>
          <li>
            <strong>Display:</strong> IPS, 75Hz, 1ms
          </li>
          <li>
            <strong>Ports:</strong> HDMI, 3.5mm Audio Out, DP
          </li>
          <li>
            <strong>Features:</strong> Free Sync, Flicker Free
          </li>
        </ul>
        <div className="price">
          <span className="discounted">₹10000.58</span>
          <span className="original">₹15000.25</span>
        </div>
        <div className="buttons">
          <button className="cart-btn">Add to Cart</button>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
