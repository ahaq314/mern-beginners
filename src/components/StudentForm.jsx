import { useState } from "react";

function StudentForm() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        age: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    function handleChange(e) {

        const { name, value } = e.target;

        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));

    }

    function handleSubmit(e) {

        e.preventDefault();

        const newErrors = {};

        if (!form.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!form.age || Number(form.age) < 1) {
            newErrors.age = "Enter a valid age";
        }

        if (form.password.length < 8) {
            newErrors.password = "Password must contain at least 8 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {

            setSubmittedData(form);

            console.log("Form submitted:", form);

        }

    }

    return (
        <div>
            <h2>Student Registration</h2>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <p>{errors.name}</p>
                </div>

                <div>
                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <p>{errors.email}</p>
                </div>

                <div>
                    <label>Age</label>

                    <input
                        type="number"
                        name="age"
                        value={form.age}
                        onChange={handleChange}
                    />

                    <p>{errors.age}</p>
                </div>

                <div>
                    <label>Password</label>

                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <p>{errors.password}</p>
                </div>

                <button type="submit">
                    Register
                </button>

            </form>

            {submittedData && (
                <div>
                    <h3>Registration successful!</h3>

                    <p>Name: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Age: {submittedData.age}</p>
                </div>
            )}

        </div>
    );

}

export default StudentForm;