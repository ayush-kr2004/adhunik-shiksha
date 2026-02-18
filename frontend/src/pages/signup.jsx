import axios from "axios";
import { useState } from "react";
import api from "../axios/api";

function Signup({ role }) {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post(`/${role}/signup`, form);
            setMessage(response.data.message);
            console.log(response.data.message);
        } catch (error) {
            console.log(error.response);
            setMessage(error.response?.data?.message);
        }
    };
    return (
        <>
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4"
                >
                    <h2 className="text-2xl font-bold text-center">Signup</h2>

                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Sign Up
                    </button>

                    {message && (
                        <p className="text-center text-sm text-red-500">{message}</p>
                    )}
                </form>
            </div>
        </>
    );
}

export default Signup;
