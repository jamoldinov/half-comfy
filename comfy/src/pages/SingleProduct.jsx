import React from "react";
import { customFetch, formatPrice } from "../utils";
import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

export const loader = async ({ params }) => {
  const req = await customFetch(`/products/${params.id}`);

  return { product: req.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();
  console.log(product);
  const { title, image, price, colors, company, description } =
    product.attributes;
  const dollar = formatPrice(price);
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
        </ul>
        <div className="mt-6 gap-y-8 grid lg:grid-cols-2 lg:gap-x-6">
          <img
            src={image}
            alt={title}
            className="w-96 h-96 rounded-lg lg:w-full object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold capitalize">{title}</h1>
            <h3 className="text-neutral-100 capitalize font-semibold tracking-wider mt-3">
              {company}
            </h3>
            <h3 className="mt-3">{dollar}</h3>
            <p className="mt-8 leading-8">{description}</p>

            <p className="mt-4 font-semibold">Colors</p>
            {/* <span>{colors}</span> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
