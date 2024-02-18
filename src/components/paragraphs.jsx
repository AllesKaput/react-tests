import "../css/paragraph.css";

export default function Paragraphs(props) {
    return props.props.map((element, index) => {
        return (
            <li key={index}>
                <p>
                    <strong>{element.title}</strong>
                    {element.description}
                </p>
            </li>
        );
    });
}
