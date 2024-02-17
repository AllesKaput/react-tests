import "../css/paragraph.css";

export default function Paragraph(props) {
    return (
        <li>
            <p>
                <strong>{props.title}</strong>
                {props.description}
            </p>
        </li>
    );
}
