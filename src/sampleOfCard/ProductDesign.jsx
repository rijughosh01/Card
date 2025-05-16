import "./ProductDesign.css";

export default function ProductDesign() {
  return (
    <div className="wrapper">
      <div className="product-img">
        <img
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/u/2/j/l-duplicate-sys-4001-192-funday-fashion-original-imahyvxz8rs2dnb5.jpeg?q=70"
          height="420"
          width="327"
          alt="Harvest Vase"
        />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>Harvest Vase</h1>
          <h2>by studio and friends</h2>
          <p>
            Harvest Vases are a reinterpretation <br />
            of peeled fruits and vegetables as <br />
            functional objects. The surfaces <br />
            appear to be sliced and pulled aside, <br />
            allowing room for growth.
          </p>
        </div>
        <div className="product-price-btn">
          <p className="price1">
            <span>78</span>$
          </p>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
}
