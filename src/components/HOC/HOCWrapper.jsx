import React from "react";

export default function wrapper(Component) {
    class WrappedComponent extends React.Component {
        render() {
            /*
            как я понял this в этом случае это
            и есть класс, в который попадают
            пропсы передаваемые в компонент,
            который уже преобразован данной
            функцией
            */
            if (!this.props.sectionNumber) {
                return <>Section number is not defined!</>;
            }
            return (
                <>
                    <div>
                        This is wrapper!
                        <Component {...this.props} />
                    </div>
                </>
            );
        }
    }
    return WrappedComponent;
}
