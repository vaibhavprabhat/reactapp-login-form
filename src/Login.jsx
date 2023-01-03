import React, {useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (
        <div className="auth-form-container">
        <h2>Login</h2>
        <form className="logIn-form" onSubmit={handleSubmit}>
            <label htmlfor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youemail@gmil.com" id="email" name="email"></input>
            <label  htmlfor="password">Password</label>
            <input value={pass} type="password" onChange={(e) => setPass(e.target.value)} placeholder="*********" id="password" name="password"></input>
            <button>log In</button>
        </form>
        <button className="Link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    )
}
