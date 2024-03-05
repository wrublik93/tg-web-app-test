import React, {useCallback, useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const Details = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { tg } = useTelegram();

    const onClick = useCallback(() => {
        navigate("/");
    }, [navigate]);

    useEffect(() => {
        tg.BackButton.isVisible = true;
        tg.BackButton.onEvent("backButtonClicked", onClick);
    }, [tg, onClick]);

    return (
        <div style={{ padding: 10 }}>
            <div style={{ paddingBottom: 10 }}>
                <b>Details:</b>
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
