import { useState, useRef } from "react";
import Button from "../button/button.jsx";
import Modal from "../Modal/Modal.jsx";
import classes from "./EffectSection.module.css";

export default function EffectSection() {
    const [isOpen, setIsOpen] = useState(false);
    const darkBg = useRef();
    const [isBackGroundOn, setIsBackGroundOn] = useState(false);

    function DarkBackground() {
        return (
            <div
                ref={darkBg}
                className={classes["dark-background"]}
            ></div>
        );
    }

    return (
        <section>
            <h1>Effects</h1>

            <Button onClick={() => setIsOpen(!isOpen)}>
                Открыть информацию
            </Button>

            {/* модальное окно и бэкграунд */}
            {isOpen && <DarkBackground />}
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
        </section>
    );
}
