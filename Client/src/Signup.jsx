import React, { useState } from "react";
import './Signup.css';

function Signup() {
    const [email, setEmail] = useState(""); 
    const [message, setMessage] = useState(""); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3002/sign-up", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message); 
            } else {
                const errorData = await response.json();
                setMessage(errorData.error || "Error sending email."); 
            }
        } catch (error) {
            setMessage("There was an error. Please try again.");
        }
    };

    return (
        <div className="content">
            <br />
            <h2 className="h2">SIGN UP FOR OUR DAILY INSIDER</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="newForm"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                />
                <button className="button" type="submit">Subscribe</button>
            </form>
            {message && <p>{message}</p>} 
        </div>
    );
}

export default Signup;
