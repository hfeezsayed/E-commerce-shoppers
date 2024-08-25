import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="container description-box">
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">
          <strong>Description</strong>
        </div>
        <div className="description-nav-box fade-box">
          <strong>Review (122)</strong>
        </div>
      </div>
      <div className="description-content fs-6">
        <p>
          E-commerce, or electronic commerce, is the buying and selling of goods
          and services over the internet. It can include the sale of physical
          goods, digital goods, and services, as well as the transmission of
          funds or data. E-commerce can be used by individuals and businesses,
          and can range in size from small home-based operations to large
          enterprises
        </p>
        <p>
          E-commerce businesses can also use technologies to protect sensitive
          consumer information and prevent data fraud, such as encryption,
          tokenization, firewalls, and fraud detection systems.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
