import React from 'react';
import "./ProductItem.css"
import Button from "../Button/Button";

const ProductItem = ({ product, className }) => {
    return (
        <div className={"product " + className}>
            <div className={"img"}></div>
            <div className={"title"}>{product.title}</div>
            <div className={"description"}>{product.description}</div>
            <div className={"price"}>
                <span>Price: <b>{product.price}</b></span>
            </div>
            <Button className={"add-btn"}>Подробности</Button>
        </div>
    );
};

export default ProductItem;
