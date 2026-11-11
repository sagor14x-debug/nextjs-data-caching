// import React from 'react';

// const ProductCard = ({product}) => {
//     const {id, name, description, price} = product;
//     return (
//       <div className="card bg-base-100 shadow-sm">
//   <div className="card-body">
//     <h2 className="card-title">{name}</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
//     );
// };

// export default ProductCard;





"use client";
import React from "react";
import useUser from "../hooks/useUser";

const ProductCard = ({ product }) => {
  const { id, name, description, price, rating } = product;
  const user = useUser();
  console.log("user for context in productCard", user);

  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <span className="text-sm text-yellow-500">⭐ {rating}</span>
        </h2>

        <p>{description}</p>

        <p className="font-bold text-lg">Price: ${price}</p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
