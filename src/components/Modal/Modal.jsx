import { useEffect, useRef } from "react";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

export default function Modal({ children, isOpen, setIsOpen }) {
    const dialog = useRef();

    // не сработает, так как useRef ещё не привязался
    // к возвращаемому компонентом тегу dialog
    // и мы попытаемся вызвать методы для undefined
    // if (isOpen) {
    //     dialog.current.showModal();
    // } else if (!isOpen) {
    //     dialog.current.close();
    // }

    useEffect(() => {
        if (isOpen) {
            dialog.current.showModal();
        } else if (!isOpen) {
            dialog.current.close();
        }
    }, [isOpen]);

    return createPortal(
        <dialog
            ref={dialog}
            className={classes["modal-window"]}
        >
            <div
                className={classes["close-button"]}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            ></div>
            {children}
        </dialog>,
        document.getElementById("modal")
    );
}
