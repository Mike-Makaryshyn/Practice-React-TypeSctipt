import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
        console.log(inputRef.current?.value);
    }

    function dragHandler(e: React.DragEvent<HTMLDivElement>) {
        console.log("DRAGGING");
    }

    function dragWithPreventHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDrag(true);
    }

    function leaveHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDrag(false);
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDrag(false);
        console.log("DROPPED");
    }

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={changeHandler}
                placeholder="Управляемый"
            />

            <input ref={inputRef} type="text" placeholder="Неуправляемый" />

            <button onClick={clickHandler}>
                get value from the input in console
            </button>
            <div
                draggable={true}
                onDrag={dragHandler}
                style={{
                    cursor: "pointer",
                    textAlign: "center",
                    display: "inline-block",
                    width: "200px",
                    height: "30px",
                    background: "lightblue",
                    marginRight: "100px",
                    marginTop: "20px",
                    marginLeft: "15px",
                }}
            >
                draggable item
            </div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    textAlign: "center",
                    display: "inline-block",
                    width: "200px",
                    height: "30px",
                    background: isDrag ? "#D66567" : "lightblue",
                }}
            >
                Changing color item
            </div>
        </div>
    );
};

export default EventsExample;
