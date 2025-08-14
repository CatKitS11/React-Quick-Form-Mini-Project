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
        <div className="flex flex-col items-start">
            <input className="mr-1" type="text" name="name" placeholder="ชื่อ" value={user.name} onChange={handleChange} />
            <input className="mr-1" type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
        </div>
    )
}

export default UserForm;