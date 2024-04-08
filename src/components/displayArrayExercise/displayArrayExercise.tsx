import React, { useState, useRef } from "react";
import s from "./displaArrayExercise.module.css";
import Button from "../button/button.jsx";

export default function DisplayArrayExercise({}) {
    const [arrayToDisplay, setArrayToDisplay] = useState<string[]>([
        "1",
        "2",
        "3",
        "4",
        "5",
    ]);
    const input: any = useRef();

    function handleAddNewWord(event) {
        if (arrayToDisplay.length >= 5) {
            const newArray: string[] = [...arrayToDisplay];
            newArray.shift();
            setArrayToDisplay([...newArray, input.current.value]);
        } else {
            setArrayToDisplay([...arrayToDisplay, input.current.value]);
        }

        // есть идейка убрать ветвление, а сделать так, чтобы
        // менялось значение, и уже потом добавлялось текущее введённое
        // но это на потом, пока и так нормально

        // if (arrayToDisplay.length >= 5) {
        //     // const newArray: string[] = [...arrayToDisplay];
        //     // newArray.shift();
        //     setArrayToDisplay((prev: any[]) => prev.shift());
        //     // console.log(arrayToDisplay);

        // }
        // setArrayToDisplay((prev) => [...prev, input.current.value]);
        // // console.log(arrayToDisplay);
    }

    return (
        <>
            <div className={s.arrayDisplayBlock}>
                <input type="text" name="input" ref={input} />
                {/* по правилам ts по идее нельзя работать с кодом Js, но тут прокатило */}
                <Button
                    onClick={(event) => {
                        handleAddNewWord(event);
                    }}
                >
                    Add Word
                </Button>
                <ul>
                    {arrayToDisplay.map((el) => {
                        return <li>{el}</li>;
                    })}
                </ul>
            </div>
        </>
    );
}
