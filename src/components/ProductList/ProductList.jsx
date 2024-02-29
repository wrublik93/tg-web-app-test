import React from 'react';
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";

const products = [
    {
        id: 1,
        title: "BYD Han Limited Edition 4WD",
        price: 500,
        description: "2023, Электро",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Lamborghini_Urus_20180306_Genf_2018.jpg/2560px-Lamborghini_Urus_20180306_Genf_2018.jpg",
    },
    {
        id: 2,
        title: "Lamborghini Urus",
        price: 100,
        description: "Бензин, 4000 см3",
        url: "https://s3.eu-central-2.wasabisys.com/shikauto-autocatalog/2e022074f932965dd181b31301e91d57/1389/1700075405MSKo5z.jpg",
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
