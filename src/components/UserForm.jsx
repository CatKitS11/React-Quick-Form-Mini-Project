import { useState } from "react";
import { validateForm } from "../utils/validation.js";

const UserForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (
        <div>
            <h1>User Form</h1>
            <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
            <button type="submit">Submit</button>
        </div>
    )
}

export default UserForm;