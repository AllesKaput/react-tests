import { useState, useRef } from "react";
import classes from "./drumSection.module.css";
import Button from "../button/button";

function StateVsRef() {
    const [isShow, setIsShow] = useState(false);
    // имеет несколько применений, но в данном случае будет использован
    // как "ярлык" для элемента. атрибутом ref={input} можно
    // привязать значение input.current к html тегу, и в дальнейшем
    // взаимодействовать с ним
    const input = useRef();

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            setIsShow((prev) => !prev);
        }
    }

    // function hadneleKeyUp(event) {
    //     if (event.key === "Enter") {
    //         setIsShow(false);
    //     }
    // }

    return (
        <div>
            <h3>Input Value: {isShow && input.current.value}</h3>
            <input
                ref={input}
                className={classes["input-fields-block__input-block"]}
                type="text"
                onKeyDown={handleKeyDown}
                // onKeyUp={hadneleKeyUp}
            />
        </div>
    );
}

export default function DrumSection() {
    // обычные стейты со своими сеттерами объявленые отдельно
    // const [name, setName] = useState("");
    // const [hasErrorOutline, setHasErrorOutline] = useState(false);
    // const [hasErrorButton, setHasErrorButton] = useState(true);
    // const [reason, setReason] = useState("error");

    // способ хранения нескольких значений стейта в одном объекте
    const [form, setForm] = useState({
        // name будет использоваться как значение value у input
        name: "",
        // Два стейта по идее можно преобразовать в один, но я пока не знаю как
        // идея в том, что изначально ошибка для кнопки должна быть, а для поля нет
        // если в поле есть ошибка, то оно обводится красным цветом, а кнопка становится
        // неактивной. Но изначально кнопка должны быть без обводки, а кнопка неактивной
        // поэтому сделан такой костыль с двумя стейтами, которые сначала разные, но
        // при наличии ввода в инпут оба принимают true, и false если нет соответственно
        hasErrorOutline: false,
        hasErrorButton: true,
        reason: "error",
    });

    function handleNameChange(event) {
        // идея в том, что value у input уже является
        // переменной, и когда мы вводим значение,
        // то, что мы пишем попадает в переменную
        // и отображается в блоке input
        // проще говоря вводя что-то в input
        // мы напрямую редактируем переменную
        // которую потом удобно использовать
        // setName(event.target.value);
        // setHasErrorOutline(event.target.value.trim().length === 0);
        // setHasErrorButton(event.target.value.trim().length === 0);

        // способ изменить часть свойств объекта сеттером, оставив
        // в том же состоянии остальные свойства
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasErrorOutline: event.target.value.trim().length === 0,
            hasErrorButton: event.target.value.trim().length === 0,
        }));
    }

    // функция для примера, по факту реализовано через
    // стрелочную функцию прямо внутри select
    function handleReasonChange(event) {
        // тут та же история, при событии
        // в переменную устанавливается значение,
        // которое приходит в тег select из option
        // setReason(event.target.value);
        setForm((prev) => ({
            ...prev,
            reason: event.target.value,
        }));
    }

    // function toggleError() {
    // setHasErrorButton((previous) => !previous);
    // setHasErrorButton((previous) => !previous);
    // двойная запись переключения сначала на противоположное
    // а затем снова на текущее состояние. Сделал в варианте
    // с отдельным сеттером для ошибки кнопки, и с общим
    // объектом и сеттером выше и ниже соответственно
    // setForm((prev) => ({
    //     ...prev,
    //     hasErrorButton: !prev.hasErrorButton,
    // }));
    // setForm((prev) => ({
    //     ...prev,
    //     hasErrorButton: !prev.hasErrorButton,
    // }));
    // }

    return (
        <section>
            <h3>Drum</h3>

            {/*
            toggleError с которым я эксперементировал для включения
            и выключения в один момент 
            */}
            {/* <Button onClick={toggleError}>Toggle Error</Button> */}

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
                    value={form.name} // объявлено через useState
                    onChange={handleNameChange}
                    style={{
                        // по умолчанию стоит false, так что обводки не будет,
                        // но при изменении поля input если оно останется пустым
                        // обводка появится
                        outline: form.hasErrorOutline ? "solid red 1px" : null,
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
                    value={form.reason} // объявлено через useState
                    onChange={(event) => {
                        setForm((prev) => ({
                            ...prev,
                            reason: event.target.value,
                        }));
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
                    disabled={form.hasErrorButton}
                >
                    Отправить
                </Button>
            </form>

            {/* debug */}
            {/* <pre>
                Name: {form.name}
                <br />
                Reason: {form.reason}
                <br />
                HasErrorButton: {`${form.hasErrorButton}`}
                <br />
                HasErrorOutline: {`${form.hasErrorOutline}`}
            </pre> */}

            <StateVsRef />
        </section>
    );
}
