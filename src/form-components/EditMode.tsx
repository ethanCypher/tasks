import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function editFunction() {
        return (
            <div>
                <Form.Group controlId="formStudentName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={updateName}
                        disabled={!editMode}
                    />
                </Form.Group>
                ;
                <Form.Check
                    type="checkbox"
                    id="is-a-student"
                    label="Student Status"
                    checked={isStudent}
                    onChange={updateStudent}
                    disabled={!editMode}
                />
            </div>
        );
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit user"
                checked={editMode}
                onChange={updateMode}
            />
            {editMode ? editFunction() : "Your Name is a student"}
            {!editMode ?
                isStudent ?
                    `${name} is a student`
                :   `${name} is not a student`
            :   ``}
        </div>
    );
}
