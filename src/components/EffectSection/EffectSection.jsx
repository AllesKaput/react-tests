import { useState, useRef, useEffect, useCallback } from "react";
// import { createPortal } from "react-dom";
import useInput from "../../hooks/useInput.js";
import Button from "../button/button.jsx";
import Modal from "../Modal/Modal.jsx";
import classes from "./EffectSection.module.css";

export default function EffectSection() {
    const inputProps = useInput();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    // const darkBg = useRef();
    // const [isBackGroundOn, setIsBackGroundOn] = useState(false);

    // function DarkBackground() {
    //     return createPortal(
    //         <div
    //             ref={darkBg}
    //             className={classes["dark-background"]}
    //         ></div>,
    //         document.getElementById("modal")
    //     );
    // }

    // можно было бы короче на await
    // useCallback нужен чтобы не переопределять функцию запроса
    // каждый раз при рендере. Пустой массив, как и в случае с useEffect
    // даст возможность запустится коду useCallback лишь 1 раз при рендере
    const fetchUsers = useCallback(() => {
        setLoading(true);
        // во вкладке network в браузере будет отображаться запрос
        // "users", потому что в url указан users
        return fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
        }).then((dataFromServer) => {
            return dataFromServer.json();
        });
    }, []);

    // getUsers вернёт промис, так что тут тоже с then()
    useEffect(() => {
        fetchUsers().then((dataFromServer) => {
            setUsers(dataFromServer);
            setLoading(false);
        });
    }, [fetchUsers]);

    return (
        <section className={classes["effects-section"]}>
            <h1>Effects</h1>

            <Button
                className={classes["open-modal-button"]}
                onClick={() => setIsOpen(!isOpen)}
            >
                Открыть информацию
            </Button>

            {/* модальное окно и бэкграунд */}
            {/* {isOpen && <DarkBackground />} */}
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            >
                <h3>Hello!</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem ex repellendus aperiam odit alias omnis quae
                    blanditiis! Deleniti tempore aperiam omnis tenetur
                    recusandae fuga quis ipsum amet, reprehenderit nam sed.
                </p>
            </Modal>

            {loading && "Loading..."}

            {!loading && (
                <>
                    <input
                        type="text"
                        className="control"
                        /* используя кастомный хук, создали объект inputProps,
                        и в этом месте передаём его свойства в тег */
                        {...inputProps}
                    />
                    {/* обратится к объекту созданному через кастомный хук можно так */}
                    <h6>{inputProps.value}</h6>
                    <ul>
                        {/* массив юзеров с сервера */}
                        {users
                            // фильтруем так, чтобы остались те, которые
                            // совпадают с введённым в данный момент в input текстом
                            // проверка осуществляется обращаясь к объекту inputProps,
                            // значения которого являются стейтами (динамически отслеживаются)
                            // и были созданы через кастомный хук
                            .filter((user) => {
                                return user.name
                                    // lowerCase для всего текста, чтобы не зависеть от заглавных
                                    .toLowerCase()
                                    .includes(inputProps.value.toLowerCase());
                            })
                            // просто вывод html-структуры из оставшихся после фильтрации
                            .map((user) => {
                                return <li key={user.id}>{user.name}</li>;
                            })}
                    </ul>
                </>
            )}
        </section>
    );
}
