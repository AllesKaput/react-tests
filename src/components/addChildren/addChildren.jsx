import classes from "./addChildern.module.css";
import Button from "../button/button.jsx";

import { useState } from "react";

export default function AddChildren() {
    const [childrenArray, setchildrenArray] = useState([]);
    const [currentInput, setCurrentInput] = useState("");

    function addComponent() {
        if (!currentInput) return;
        // работает так: при запуске функции массив childrenArray
        // является пустым, но тут мы добавляем в массив count
        // все элементы из childrenArray и ещё 1 (childrenArray
        // может быть пустым, и тогда в него просто добавится 1)
        // и так происходит каждый раз при активации, массив
        // увеличивается на 1
        const count = [...childrenArray, `${currentInput}`];
        // далее динамически рендереящийся массив childrenArray
        // становится копией увеличенного ранее массива
        setchildrenArray(count);
        // сначала как бы создаётся увеличенная на 1 версия текущего
        // динамического массива, а потом самому динамическому
        // массиву присваивается значение его увеличенной копии
    }

    return (
        <div className={classes["add-section"]}>
            <Button onClick={addComponent}>Add</Button>
            <input
                onChange={(e) => setCurrentInput(e.target.value)}
                type="text"
                value={currentInput}
            />
            {
                // динамически рендереящийся массив просто выводится через map
                childrenArray.map((el, i) => {
                    return <div key={i}>{el}</div>;
                })
            }
        </div>
    );
}
