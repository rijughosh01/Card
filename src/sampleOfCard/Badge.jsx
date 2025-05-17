import "./Badge.css";

export default function Badge() {
  return (
    <div class="product-card">
      <div class="badge">Hot</div>
      <div class="product-tumb">
        <img
          src="https://m.media-amazon.com/images/I/31QRFxphBAL._SX300_SY300_QL70_FMwebp_.jpg"
          alt=""
        ></img>
      </div>
      <div class="product-details">
        <span class="product-catagory">Headphones</span>
        <h4>
          <a href="">Wireless Bluetooth Over Ear Headphones</a>
        </h4>
        <p>
          Sony WH-CH720N Active Noise Cancellation Wireless Bluetooth Over Ear
          Headphones with Mic, Adaptive Sound Control, Quick Charge, Up to 35Hrs
          Battery, Customized EQ- Blue
        </p>
        <div class="product-bottom-details">
          <div class="product-price">
            <small>$160.00</small>$110.99
          </div>
          <div class="product-links">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="icon-heart"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="icon-heart"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
