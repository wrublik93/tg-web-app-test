import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../Button/Button";

const Details = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/");
    };

    return (
        <div>
            <div>
                Details:
            </div>
            <div>
                {state?.title}
            </div>
            <div>
                {state?.description}
            </div>
            <Button onClick={onClick}>Go back</Button>
        </div>
    );
};

export default Details;
