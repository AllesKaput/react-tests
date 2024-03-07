import { useEffect, useCallback, useMemo, useState } from "react";

export default function AppComponent() {
    const [effectState, setEffectState] = useState(false);
    const [resultState, setResultState] = useState(false);

    useEffect(
        () => {
            console.log("Effect activated!");
        },
        // при изменении зависимостей (часто это стейт)
        // будет выполнена функция-коллбэк которая передана
        // в useEffect выше
        [effectState]
    );

    // myFunction в данном случае станет функцией, которая
    // передаётся как первый аргумент в useCallback
    // при этом при ре-рендере компонента, myFunction
    // не будет переопределятся, если не будут менятся
    // зависимости
    const myFunction = useCallback(() => {
        return fetch("https://site.com/data", {
            method: "GET",
        }).then((dataFromServer) => {
            return dataFromServer.json();
        });
        // массив пустой, useCallback будет вызван 1 раз
    }, []);

    // result в данном случае станет константой, значение
    // которой будет тем, что возвращает функция-коллбэк
    // переданная первым аргументом в useMemo, то есть 1
    const result = useMemo(() => {
        // условная тяжёлая задача, которую не следует
        // запускать каждый раз при ре-рендере
        for (let i = 0; i < 600000000; i++) {}

        return 1;
        // зависимость, при изменении которой
        // переменная result будет перезаписываться
    }, [resultState]);

    return <>Something...</>;
}
