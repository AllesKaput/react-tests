import { useState } from "react";
import Button from "../button/button.jsx";
import Count from "./Count.jsx";
import IsFive from "./IsFive.jsx";

export default function Counter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    return (
        <>
            <h5>Счётчик 1</h5>
            <div>
                <Button onClick={() => setCount1(count1 + 1)}>+</Button>
                <Count
                    id={1}
                    value={count1}
                />
            </div>

            <h5>Счётчик 2</h5>
            <div>
                <Button onClick={() => setCount2(count2 + 1)}>+</Button>
                <Count
                    id={2}
                    value={count2}
                />
                <IsFive value={count2} />
            </div>
        </>
    );
}
