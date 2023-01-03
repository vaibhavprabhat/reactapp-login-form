import React, {useState} from "react";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form"  onSubmit={handleSubmit}>
    
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="full Name" id="name" name="name"></input>
            <label htmlfor="email">Email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youemail@gmil.com" id="email" name="email"></input>    
            <label  htmlfor="password">Password</label>
            <input value={pass} type="password" onChange={(e) => setPass(e.target.value)} placeholder="*********" id="password" name="password"></input>
                 
            <button>log In</button>
        </form>
        <button className="Link-btn" onClick={() => props.onFormSwitch('login')}>Alerady have an account? Login here</button>
        </div>
    )
}
