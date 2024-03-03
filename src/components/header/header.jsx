import { useEffect, useState } from "react";
import classes from "./header.module.css";

export default function Header() {
    // now это текущее время и дата

    const [now, setNow] = useState(new Date());

    // тут с помощью сеттера для now меняем его каждую секунду
    // пока что эта функция костыль и при срабатывании она удаляет
    // текущий интервал, и запускает новый (так как при срабатывании setNow
    // снова запускается новый сетинтервал). Я сделал костыль с удалением старого
    // интервала, но по идее нужно сделать так, чтобы работал всегда один
    // (ПЕРЕДЕЛАТЬ)
    // let timerId2 = setInterval(() => {
    //     setNow(new Date());
    //     console.log(timerId2);
    //     // clearInterval(timerId2);
    // }, 1000);

    // передалал
    useEffect(() => {
        setInterval(() => {
            setNow(new Date());
        }, 1000);
    }, []);

    return (
        <header className={classes["header-class"]}>
            {/* <img src={logo} alt="err" /> */}
            <h1>Dubstep</h1>

            {/*
            здесь указан now, при это он будет автоматически
            перерисовываться при обновлении через setInterval
             */}
            <span>Время сейчас: {now.toLocaleString("ru-RU")}</span>
        </header>
    );
}
