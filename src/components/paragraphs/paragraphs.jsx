import classes from "./paragraph.module.css";

export default function Paragraphs({ title, description }) {
    // return props.map((element, index) => {
    return (
        <li className={classes["list-element"]}>
            <p>
                <strong>{title}</strong>
                {description}
            </p>
        </li>
    );
    // });
}
