import { useState } from "react";
import "./ProductImageSlider.css";

const ProductImageSlider = () => {
  const images = [
    "/monitor.png",
    "/monitor2.png",
    "/monitor3.png",
    "/monitor4.png",
    "/monitor5.png",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="product-image-slider">
      <div className="main-image">
        <img src={mainImage} alt="Main Product" />
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onMouseEnter={() => setMainImage(image)}
            className="thumb"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;