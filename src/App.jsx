import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/header.jsx";
import ParagraphsSection from "./components/paragraphsSection/paragraphSection.jsx";
import ButtonSection from "./components/buttonSection/buttonSection.jsx";
import AddChildren from "./components/addChildren/addChildren.jsx";
import TabSwitchSection from "./components/tabSwitchSection/tabSwitchSection.jsx";
import DrumSection from "./components/drumSection/drumSection.jsx";
import HOC from "./components/HOC/HOC.jsx";
import EffectSection from "./components/EffectSection/EffectSection.jsx";
import Counter from "./components/Counter/Counter.jsx";

// import jsonTestData from "./data/test.json";
// console.log(jsonTestData);

function App() {
    const [activeTab, setActiveTab] = useState("Counter");

    // function switchTabs(currentTab) {
    //     setActiveTab(currentTab);
    // }

    return (
        <>
            <Header />

            <main>
                <TabSwitchSection
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                {/* /////////////////////////////////////// */}

                {activeTab === "Main" && (
                    <>
                        <ParagraphsSection />
                        <ButtonSection />
                        <AddChildren />
                    </>
                )}

                {activeTab === "Drum" && (
                    <>
                        <DrumSection />
                    </>
                )}

                {activeTab === "HOC" && (
                    <>
                        <HOC />
                    </>
                )}

                {activeTab === "Effects" && (
                    <>
                        <EffectSection />
                    </>
                )}

                {activeTab === "Counter" && (
                    <>
                        <Counter />
                    </>
                )}
            </main>
        </>
    );
}

export default App;
