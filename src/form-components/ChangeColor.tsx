import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "magenta",
    "cyan",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [selectedColor, setColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((color: string, index: number) => (
                <div key={index}>
                    <Form.Check
                        inline
                        type="radio"
                        name="color"
                        onChange={updateColor}
                        id="color-check"
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                    ></Form.Check>
                </div>
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: selectedColor }}
            >
                You have chosen {selectedColor}
            </div>
        </div>
    );
}
