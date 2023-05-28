import React, {FC} from 'react';
import "./Button.css"; // импортируем CSS-стили для компонента

type ButtonProps = {
    icon?: JSX.Element; // опциональный параметр для иконки
    text?: string;
    callback?: () => void;
    background?: string;
};

const Index:FC<ButtonProps> = ({ icon, text, callback, background }) => {
    return (
        <button style={{backgroundColor: background}} onClick={callback} className="button">
            {icon && <span className="button-icon">{icon}</span>}
            <span className="button-text">{text}</span>
        </button>
    );
};

export default Index;
