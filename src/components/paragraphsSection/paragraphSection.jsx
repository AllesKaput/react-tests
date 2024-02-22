import Paragraphs from "../paragraphs/paragraphs.jsx";
import { paragraphsData } from "../../paragraphsData.js";

export default function ParagraphsSection() {
    return (
        <section>
            <h3>Dubstep</h3>

            <ul>
                {/* 
                Есть также вариант сделать динамический компонент, перенеся
                map в него, но конкретно здесь компонент статичен, а map
                проходится по нему и генерирует нужное кол-во компонентов
                именно в файле куда компонент и интегрируется
                */}
                {paragraphsData.map((paragraphData) => {
                    return (
                        <Paragraphs
                            // уникальный ключ, который например может быть описанием
                            // (оно по идее будет уникальным)
                            key={paragraphData.description}
                            {...paragraphData}
                        />
                    );
                })}
            </ul>
        </section>
    );
}
