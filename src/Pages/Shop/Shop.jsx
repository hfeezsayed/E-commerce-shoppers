import React from "react";
import "./Shop.css";
import Hero from "../../components/Hero/Hero";
import Popular from "../../components/Popular/Popular";
import Offers from "../../components/Offers/Offers";
import NewCollection from "../../components/NewCollections/NewCollection";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </>
  );
};

export default Shop;
