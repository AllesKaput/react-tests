import "./App.css";
import Header from "./components/header.jsx";
import Paragraph from "./components/paragraph.jsx";
import { paragraphs } from "./mainBlockData.js";

function App() {
    return (
        <div>
            <Header />
            <main>
                <section>
                    <h3>Dubstep</h3>

                    <ul>
                        <Paragraph
                            title={paragraphs[0].title}
                            description={paragraphs[0].description}
                        />
                        <Paragraph
                            title={paragraphs[1].title}
                            description={paragraphs[1].description}
                        />
                        <Paragraph
                            title={paragraphs[2].title}
                            description={paragraphs[2].description}
                        />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
