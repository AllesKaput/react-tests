import React from "react";

const countOfRenders = {
    firstCounter: 0,
    secondCounter: 0,
};

export default React.memo(function Count({ id, value }) {
    console.warn(
        `Count of ${id === 1 ? "first" : "second"} counter render is ${
            id === 1
                ? ++countOfRenders.firstCounter
                : ++countOfRenders.secondCounter
        }`
    );

    return <div>{value}</div>;
});
