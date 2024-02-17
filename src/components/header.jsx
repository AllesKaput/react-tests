import "../css/header.css";
import logo from "../logo.svg";

const now = new Date();

export default function Header() {
    return (
        <header>
            {/* <img src={logo} alt="err" /> */}
            <h1>Dubstep</h1>

            <span>Время сейчас: {now.toLocaleString("ru-RU")}</span>
        </header>
    );
}
