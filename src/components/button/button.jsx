import classes from "./button.module.css";
// children - неявно передающийся props, в него попадает содержимое находящееся между тегами (как в обычном html)
// можно передавать также теги и JS-код
export default function Button({
    children,
    isActive,
    isSubmit,
    className,
    // onClick,
    // если что то повторяющеесе (по типу onClick)
    // передаётся, то оно попадает в props,
    // и здесь соответственно принимается
    ...props 
}) {
    return (
        <button
            // здесь оно разбивается спредом, и просто устанавливается для button
            {...props}
            // начальный класс button + переключатель активного класса isActive
            // isActive переключается на true/false в зависимости от переданных
            // условий в месте, где вызывается компонент
            className={
                // по умолчанию класс кнопки
                classes.button +
                " " + // это просто разделители для классов в виде пробела
                // активный или нет (условие указывается при вызове компонента)
                (isActive ? classes.active : "") +
                " " +
                // доп. классы если такие передаются
                (className ? className : "")
            }
            // onClick={() => {
            //     // при клике запускается переданная из файла где компонент вызывается в компонент функция
            //     // которая неким образом взаимодействует со страницей (если таковая функция имеется)
            //     onClick && onClick();
            // }}
            // по умолчанию сделал обычной кнопкой, но если при вызове передать true, то станет submit
            type={isSubmit ? "submit" : "button"}
        >
            {children}
        </button>
    );
}
