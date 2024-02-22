import { useState } from "react";
import "./button.css";
// children - неявно передающийся props, в него попадает содержимое находящееся между тегами (как в обычном html)
// можно передавать также теги и JS-код
export default function Button({ children, onClick, isActive }) {
    return (
        <button
            // начальный класс button + переключатель активного класса isActive
            // isActive переключается на true/false в зависимости от контента
            // внутри тега
            className={"button" + " " + (isActive ? "active" : "")}
            onClick={() => {
                // при клике запускается переданная из app.jsx в компонент функция
                // которая неким образом взаимодействует со страницей
                onClick();
            }}
        >
            {children}
        </button>
    );
}
