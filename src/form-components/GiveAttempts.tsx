import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");

    function updateAttemptsRequested(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        setAttemptsRequested(event.target.value);
    }

    function useAttempts(): void {
        setAttemptsRemaining(attemptsRemaining - 1);
    }

    function gainAttempts(): void {
        if (attemptsRequested === "") {
            setAttemptsRemaining(attemptsRemaining);
        } else {
            setAttemptsRemaining(
                attemptsRemaining + parseInt(attemptsRequested),
            );
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formQuizAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={updateAttemptsRequested}
                />
            </Form.Group>
            <Button onClick={useAttempts} disabled={attemptsRemaining === 0}>
                use
            </Button>
            <Button onClick={gainAttempts}>gain</Button>
            Attempts remaining: {attemptsRemaining}
        </div>
    );
}
