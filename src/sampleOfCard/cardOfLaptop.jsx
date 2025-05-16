import "./cardOfLaptop.css";

export default function productDesign2() {
  return (
    <div className="cardDesign">
      <div className="card__title">
        <div className="icon">
          <a href="#">
            <i className="fa fa-arrow-left"></i>
          </a>
        </div>
      </div>

      <div className="card__body">
        <div className="half">
          <div className="featured_text">
            <h1>Apple</h1>
            <p className="sub">MacBook Air</p>
            <p className="price">$210.00</p>
          </div>
          <div className="image">
            <img
              src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/c/o/7/-original-imahayjpsngfg4uf.jpeg?q=70"
              alt="Office Chair"
            />
          </div>
        </div>

        <div className="half">
          <div className="description">
            <p>
              MacBook Air is the world’s most popular laptop for a reason.
              Actually, for a lot of reasons. It delivers up to 18 hours of
              battery life.2 The M4 chip unlocks a whole new level of
              performance for work and play. Apple Intelligence is built in to
              help you get things done effortlessly.
            </p>
          </div>
          <span className="stock">
            <i className="fa fa-pen"></i> In stock
          </span>
          <div className="reviews">
            <span>★★★★☆ (64 reviews)</span>
          </div>
        </div>
      </div>

      <div className="card__footer">
        <div className="recommend">
          <p>Recognized by</p>
          <h3>Charlotte Bennett</h3>
        </div>
        <div className="action">
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
