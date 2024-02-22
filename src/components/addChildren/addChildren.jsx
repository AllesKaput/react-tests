import { useState } from "react";

export default function AddChildren() {

    const [childrenCount, setChildrenCount] = useState([]);

    function addComponent() {
        // работает так: при запуске функции массив childrenCount
        // является пустым, но тут мы добавляем в массив count
        // все элементы из childrenCount и ещё 1 (childrenCount
        // может быть пустым, и тогда в него просто добавится 1)
        // и так происходит каждый раз при активации, массив
        // увеличивается на 1
        const count = [...childrenCount, 1];
        // далее динамически рендереящийся массив childrenCount 
        // становится копией увеличенного ранее массива
        setChildrenCount(count);
        // сначала как бы создаётся увеличенная на 1 версия текущего
        // динамического массива, а потом самому динамическому
        // массиву присваивается значение его увеличенной копии
    }

    return (
        <div className="App">
            <button onClick={addComponent}>Add another dub</button>
            {
                // динамически рендереящийся массив просто выводится через map
                childrenCount.map((el, i) => {
                    return (
                        <h4>Dub {i}</h4>
                    )
                })
            }
        </div>
    );
}
