import "./paragraph.css";

export default function Paragraphs({ title, description }) {
    // return props.map((element, index) => {
    return (
        <li className="list-element">
            <p>
                <strong>{title}</strong>
                {description}
            </p>
        </li>
    );
    // });
}
