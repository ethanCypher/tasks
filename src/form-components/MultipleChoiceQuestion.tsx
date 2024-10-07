import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [currentChoice, setCurrentChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formMulitpleChoice">
                <Form.Label>Select an answer</Form.Label>
                <Form.Select value={currentChoice} onChange={updateChoice}>
                    {options.map((answer: string, index: number) => (
                        <option key={index} value={answer}>
                            {answer}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {expectedAnswer === currentChoice ? "✔️" : "❌"}
        </div>
    );
}
