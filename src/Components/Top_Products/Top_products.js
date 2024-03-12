import React, { useState } from "react";
import "./Top_products.css";

const Top_products = () => {
  const [products, setProducts] = useState([
    {
      product_name: "Tomoto",
      stack: 50,
      color: "red",
    },
    {
      product_name: "Beans",
      stack: 50,
      color: "green",
    },
    {
      product_name: "Onion",
      stack: 50,
      color: "pink",
    },
  ]);
  return (
    <div className="Top_products">
      Top Products
      <div className="products">
        {products.map((item) => {
          return (
            <div
              className="products_box"
              style={{ borderLeft: `5px solid ${item.color}` }}
            >
              <div className="product_name">{item.product_name}</div>
              <div className="product_Qtd">{item.stack}Kg</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Top_products;
