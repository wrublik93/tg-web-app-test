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
        <div style={{ padding: 10 }}>
            <div>
                Details:
            </div>
            <div>
                {state?.title}
            </div>
            <div style={{ paddingBottom: 10 }}>
                {state?.description}
            </div>
            <Button onClick={onClick}>Go back</Button>
        </div>
    );
};

export default Details;
