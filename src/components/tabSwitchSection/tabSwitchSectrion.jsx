import classes from "./tabSwitchSection.module.css";
import Button from "../button/button";

export default function TabSwitchSection({ activeTab, switchTabs }) {
    // const [activeTab, setActiveTab] = useState("Main");

    // function switchTabs(currentTab) {
    //     setActiveTab(currentTab);
    // }

    return (
        <div className={classes["tab-switch-section"]}>
            <Button
                onClick={() => {
                    switchTabs("Main");
                }}
                isActive={activeTab === "Main"}
            >
                Main
            </Button>
            <Button
                onClick={() => {
                    switchTabs("Drum");
                }}
                isActive={activeTab === "Drum"}
            >
                Drum
            </Button>
        </div>
    );
}
