import React from 'react';
import "./ProductItem.css"
import Button from "../Button/Button";

const ProductItem = ({ product, className }) => {
    return (
        <div className={"product " + className}>
            <div>
                <div className={"img"}>
                    <img src={product.url} alt="photor" height={100} />
                </div>
                <div className={"title"}>{product.title}</div>
                <div className={"description"}>{product.description}</div>
                <div className={"price"}>
                    <span>Price: <b>{product.price}</b></span>
                </div>
            </div>
            <div>
                <Button className={"add-btn"}>Подробности</Button>
            </div>
        </div>
    );
};

export default ProductItem;
