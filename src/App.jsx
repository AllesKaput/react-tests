import "./App.css";
import Header from "./components/header.jsx";

const user = {
    firstName: "Иван",
    lastName: "Иванов",
};

function formateUser(user) {
    return user.firstName + " " + user.lastName;
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <div>Hello {formateUser(user)}</div>
            </main>
        </div>
    );
}

export default App;
