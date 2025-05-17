import "./T-shirtCard.css";

export default function TShirtCard({ image, name, color, price }) {
  if (!image || !name || !color || !price) return null;
  return (
    <div className="card-Tshirt">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <section className="details">
        <div className="min-details">
          <h1>
            {name} <br />
            <span>{color}</span>
          </h1>
          <h1 className="price">{price}</h1>
        </div>
        <div className="card-actions">
          <button className="add-btn">Add</button>
          <button className="buy-btn">Buy</button>
        </div>
      </section>
    </div>
  );
}
