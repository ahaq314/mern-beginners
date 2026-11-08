import { useState } from "react";

function NameInput() {

    const [name, setName] = useState("");

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <h2>Name Input</h2>

            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name"
            />

            <p>Your name is: {name}</p>
        </div>
    );
}

export default NameInput;