import React from 'react';
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";

const products = [
    {
        id: 1,
        title: "BYD Han Limited Edition 4WD",
        price: 500,
        description: "2023, Электро"
    },
    {
        id: 1,
        title: "Lamborghini Urus",
        price: 100,
        description: "Бензин, 4000 см3"
    }
]

const ProductList = () => {
    return (
        <div className={"list"}>
            {products.map(item => (
                <ProductItem key={item.id} product={item} className={"item"} />
            ))}
        </div>
    );
};

export default ProductList;
