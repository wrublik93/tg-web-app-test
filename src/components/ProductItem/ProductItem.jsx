import React from 'react';
import "./ProductItem.css"
import Button from "../Button/Button";
import {useNavigate} from "react-router-dom";

const ProductItem = ({ product, className }) => {
    const navigate = useNavigate();
    const changePage = () => {
        navigate(`/${product.id}`, { state: product })
    };

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
                <Button className={"add-btn"} onClick={changePage}>Подробности</Button>
            </div>
        </div>
    );
};

export default ProductItem;
