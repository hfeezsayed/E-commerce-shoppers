import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../../components/Breadcrums/Breadcrums";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProduct.find((e) => e.id === Number(productId));
  return (
    <div>
      <div>
        <Breadcrums product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default Product;
