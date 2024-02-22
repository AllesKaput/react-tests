import Button from "../button/button.jsx";
import { useState } from "react";

// если определить таймер айди внутри компонента, то при
// срабатывании функции на клике, переменная будет переопределятся
// при создании нового таймаута, и при попытке удалить предыдущий,
// ничего происходить не будет
let timerId;

export default function ButtonSection() {
    // то, что передано в useState попадает в переменную contentType
    // функция setContentType это возвращаемая useState функция
    // для изменения переменной contentType
    // в общем получается начальное значение, и способ его изменить
    const [contentType, setContentType] = useState("Click on the button!");

    function handleClick(buttonIndex) {
        // это удаление предыдущего таймаута до возвращения
        // к дефолтному значению контента в параграфе (если кнопка была
        // нажата во время работы предыдущего таймаута)
        clearTimeout(timerId);

        // console.log(`Button ${buttonIndex} is clicked`);
        setContentType(`Button ${buttonIndex} is clicked`);

        timerId = setTimeout(() => {
            // console.log("коллбэк");

            setContentType("Click on the button!");
            // console.log(timerId);
        }, 1000);
        // console.log(timerId);
    }
    return (
        <section>
            <h3>Drum</h3>
            {/* 
            children - неявно передающийся props, в него попадает
            содержимое находящееся между тегами (как в обычном html)
            можно передавать также теги и JS-код
            */}
            <div>
                <Button
                    isActive={contentType === `Button 1 is clicked`}
                    onClick={() => {
                        handleClick("1");
                    }}
                >
                    Button 1
                </Button>
                <Button
                    isActive={contentType === `Button 2 is clicked`}
                    onClick={() => {
                        handleClick("2");
                    }}
                >
                    Button 2
                </Button>
            </div>

            <p>{contentType}</p>
        </section>
    );
}
