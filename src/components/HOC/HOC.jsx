import FirstSection from "../HOCSections/firstSection";
import SecondSection from "../HOCSections/secondSection";
import wrapper from "./HOCWrapper.jsx";

export default function HOC() {
    // сначала идёт преобразование имеющихся компонентов
    // в модифицированные с помощью High Oreder Component wrapper
    const WrappedFirstSection = wrapper(FirstSection);
    const WrappedSecondSection = wrapper(SecondSection);

    return (
        <div style={{ marginTop: 20 + "px" }}>
            {/*
            далее уже модифицированные компоненты
            вствляются в обычную разметку
            (пропсы указанные здесь попадают куда надо
            с помощью this.props в HOC компоненте)
            */}
            <WrappedFirstSection sectionNumber="first" />
            <WrappedSecondSection sectionNumber="2" />
        </div>
    );
}
