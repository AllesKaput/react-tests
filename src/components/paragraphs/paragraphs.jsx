import "./paragraph.css";

export default function Paragraphs({ props }) {
    return props.map((element, index) => {
        return (
            <li className="list-element" key={index}>
                <p>
                    <strong>{element.title}</strong>
                    {element.description}
                </p>
            </li>
        );
    });
}
