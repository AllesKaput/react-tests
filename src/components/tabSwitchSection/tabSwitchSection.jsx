import classes from "./tabSwitchSection.module.css";
import Button from "../button/button";

export default function TabSwitchSection({ activeTab, setActiveTab }) {
    // const [activeTab, setActiveTab] = useState("Main");

    // function switchTabs(currentTab) {
    //     setActiveTab(currentTab);
    // }

    return (
        <div
            className={
                classes["tab-switch-section"] +
                " " +
                "_margin-modifier-for-childrens"
            }
        >
            <Button
                onClick={() => setActiveTab("Main")}
                isActive={activeTab === "Main"}
            >
                Main
            </Button>
            <Button
                onClick={() => setActiveTab("Drum")}
                isActive={activeTab === "Drum"}
            >
                Drum
            </Button>
            <Button
                onClick={() => setActiveTab("HOC")}
                isActive={activeTab === "HOC"}
            >
                HOC
            </Button>
            <Button
                onClick={() => setActiveTab("Effects")}
                isActive={activeTab === "Effects"}
            >
                EffectSection
            </Button>
            <Button
                onClick={() => setActiveTab("Counter")}
                isActive={activeTab === "Counter"}
            >
                Counter
            </Button>
            <Button
                onClick={() => {
                    setActiveTab("displayArrayExercise");
                }}
                isActive={activeTab === "displayArrayExercise"}
            >
                Display Array Test
            </Button>
        </div>
    );
}
