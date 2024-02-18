import "./App.css";
import Header from "./components/header.jsx";
import Paragraphs from "./components/paragraphs.jsx";
import { paragraphsData } from "./paragraphsData.js";

function App() {
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
            </main>
        </div>
    );
}

export default App;
