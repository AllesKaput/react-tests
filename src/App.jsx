import "./App.css";
import Header from "./components/header/header.jsx";
import ParagraphsSection from "./components/paragraphsSection/paragraphSection.jsx";
import ButtonSection from "./components/buttonSection/buttonSection.jsx";
import AddChildren from "./components/addChildren/addChildren.jsx";
import jsonTestData from "./data/test.json";

console.log(jsonTestData);

function App() {
    return (
        <>
            <Header />
            <main>
                <ParagraphsSection />

                <ButtonSection />

                <AddChildren />
            </main>
        </>
    );
}

export default App;
