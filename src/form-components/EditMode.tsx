// import React, { useState } from "react";
// import { Form } from "react-bootstrap";

// export function EditMode(): React.JSX.Element {
//     const [editMode, setEditMode] = useState<boolean>(false);
//     const [isStudent, setIsStudent] = useState<boolean>(true);
//     const [name, setName] = useState<string>("Your Name");

//     function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
//         setEditMode(event.target.checked);
//     }

//     return (
//         <div>
//             <h3>Edit Mode</h3>
//             <Form.Check
//                 type="switch"
//                 id="is-edit-check"
//                 label="Edit user"
//                 checked={editMode}
//                 onChange={updateMode}
//             />
//             {!editMode ?
//                 isStudent ?
//                     "Your Name is a student"
//                 :   "Your Name is not a student"
//             : isStudent ?
//                 "${name} is a student"
//             :   "${name} is not a student"}
//         </div>
//     );
// }
