import { useState } from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Paragraphs from "./components/paragraphs/paragraphs.jsx";
import { paragraphsData } from "./paragraphsData.js";
import Button from "./components/button/button.jsx";

let timerId;

function App() {
    // то, что передано в useState попадает в переменную content
    // функция setContent это возвращаемая useState функция
    // для изменения переменной content
    // в общем получается начальное значение, и способ его изменить
    const [content, setContent] = useState("Click on the button!");
    // const [isActive, setActive] = useState(false);

    // let needToChange = true;
    // let previousNeedTochange = false;

    function handleClick(buttonIndex) {
        clearTimeout(timerId);

        // console.log(`Button ${buttonIndex} is clicked`);
        setContent(`Button ${buttonIndex} is clicked`);

        timerId = setTimeout(() => {
            console.log("коллбэк");
            setContent("Click on the button!");
        }, 1000);
        console.log(timerId);
    }

    return (
        <div>
            <Header />
            <main>
                <section>
                    <h3>Dubstep</h3>

                    <ul>
                        <Paragraphs props={paragraphsData} />
                    </ul>
                </section>
                <section>
                    <h3>Drum</h3>
                    {/* 
                    children - неявно передающийся props, в него попадает
                    содержимое находящееся между тегами (как в обычном html)
                    можно передавать также теги и JS-код
                    */}
                    <Button
                        onClick={() => {
                            handleClick("1");
                        }}
                    >
                        Button 1
                    </Button>
                    <Button
                        onClick={() => {
                            handleClick("2");
                        }}
                    >
                        Button 2
                    </Button>

                    <p>{content}</p>
                </section>
            </main>
        </div>
    );
}

export default App;
