import classes from "./Modal.module.css";

export default function Modal({ children, isOpen, setIsOpen }) {
    return (
        <dialog
            open={isOpen}
            className={classes["modal-window"]}
        >
            <div
                className={classes["close-button"]}
                onClick={() => setIsOpen(!isOpen)}
            ></div>
            {children}
        </dialog>
    );
}
