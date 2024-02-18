import { useState } from "react";
import "./button.css";
// children - неявно передающийся props, в него попадает содержимое находящееся между тегами (как в обычном html)
// можно передавать также теги и JS-код
export default function Button({ children, onClick }) {
    const [isActive, setActive] = useState(false);
    // isActive по умолчанию false (то, что переданно в useState)
    // setActive это функция для изменения состояния

    return (
        <button
        // начальный класс button + переключатель активного класса через useState
        // он непрерывно следит за свойством isActive, и при его смене ставит
        // одно из значений
            className={"button" + " " + (isActive ? "active" : "")}
            onClick={() => {
                // при клике запускается переданная из app.jsx в компонент функция
                // которая неким образом взаимодействует со страницей
                onClick();
                // и переключатель класса. Если его также передавать из главного
                // файла, то будет очень неудобно и запутанно с свойством
                // isActive, поэтому переключатель класса реализован внутри
                // компонента
                setActive(!isActive);
            }}
        >
            {children}
        </button>
    );
}
