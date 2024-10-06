import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function decreaseAttempts(): void {
        const newAttempts = attempts - 1;
        setAttempts(newAttempts);
        setProgress(!progress);
    }
    function increaseAttempts(): void {
        const increased = attempts + 1;
        setAttempts(increased);
    }
    return (
        <div>
            <Button
                onClick={decreaseAttempts}
                disabled={progress || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setProgress(false);
                }}
                disabled={!progress}
            >
                Stop Quiz
            </Button>
            <Button onClick={increaseAttempts} disabled={progress}>
                Mulligan
            </Button>
            <div>{attempts}</div>
        </div>
    );
}
