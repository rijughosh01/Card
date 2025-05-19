import "./cardImage.css";

export default function ardImage() {
  return (
    <>
      <div className="product-card-image">
        <div className="product-image-container">
          <img
            src="https://m.media-amazon.com/images/I/71+x0eG5vQL._SY741_.jpg"
            alt="Product"
          />
        </div>
        <div className="product-details-image">
          <h1>Boho Style</h1>
          <p>
            TQH Women's Casual Printed Round Neck, Oversized Longline Drop
            Shoulder Boho Style T-Shirt
          </p>
          <button type="button" className="btn">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
