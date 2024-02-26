import { useState } from "react";
import classes from "./drumSection.module.css";
import Button from "../button/button";

export default function DrumSection() {
    // name будет использоваться как значение value у input
    const [name, setName] = useState("");
    // Два стейта по идее можно преобразовать в один, но я пока не знаю как
    // идея в том, что изначально ошибка для кнопки должна быть, а для поля нет
    // если в поле есть ошибка, то оно обводится красным цветом, а кнопка становится
    // неактивной. Но изначально кнопка должны быть без обводки, а кнопка неактивной
    // поэтому сделан такой костыль с двумя стейтами, которые сначала разные, но
    // при наличии ввода в инпут оба принимают true, и false если нет соответственно
    const [hasErrorOutline, sethasErrorOutline] = useState(false);
    const [hasErrorButton, sethasErrorButton] = useState(true);
    const [reason, setReason] = useState("error");

    function handleNameChange(event) {
        // идея в том, что value у input уже является
        // переменной, и когда мы вводим значение,
        // то, что мы пишем попадает в переменную
        // и отображается в блоке input
        // проще говоря вводя что-то в input
        // мы напрямую редактируем переменную
        // которую потом удобно использовать
        setName(event.target.value);
        sethasErrorOutline(event.target.value.trim().length === 0);
        sethasErrorButton(event.target.value.trim().length === 0);
    }

    // функция для примера, по факту реализовано через
    // стрелочную функцию прямо внутри select
    function handleReasonChange(event) {
        // тут та же история, при событии
        // в переменную устанавливается значение,
        // которое приходит в тег select из option
        setReason(event.target.value);
    }

    return (
        <section>
            <h3>Drum</h3>

            <form className={classes["input-fields-block"]}>
                <label
                    className={classes["input-fields-block__label"]}
                    htmlFor="user"
                >
                    Your name
                </label>
                <input
                    type="text"
                    id="user"
                    className={classes["input-fields-block__input-block"]}
                    value={name} // объявлено через useState
                    onChange={handleNameChange}
                    style={{
                        // по умолчанию стоит false, так что обводки не будет,
                        // но при изменении поля input если оно останется пустым
                        // обводка появится
                        outline: hasErrorOutline ? "solid red 1px" : null,
                    }}
                />

                <label
                    className={classes["input-fields-block__label"]}
                    htmlFor="reason"
                >
                    Причина обращения
                </label>
                <select
                    className={classes["input-fields-block__select-block"]}
                    id="reason"
                    value={reason} // объявлено через useState
                    onChange={(event) => {
                        setReason(event.target.value);
                    }}
                >
                    <option value="error">Ошибка</option>
                    <option value="help">Помощь</option>
                    <option value="suggest">Предложение</option>
                </select>

                <Button
                    // тестировал передачу доп классов в компонент,
                    // поэтому осталась многострочная запись передачи классов
                    className={`
                    ${classes["input-fields-block__submit-button"]}
                    `}
                    // раз это форма, то это должна быть submit кнопка
                    isSubmit={true}
                    // если инпут пустой, то кнопка будет выключена
                    disabled={hasErrorButton}
                >
                    Отправить
                </Button>
            </form>

            {/* debug */}
            <pre>
                Name: {name}
                <br />
                Reason: {reason}
            </pre>
        </section>
    );
}
