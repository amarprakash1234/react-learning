import { useState } from "react";



export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input name="fullName" id="fullName" placeholder="enter your full name" type="text" value={formData.fullName} onChange={handleInputChange}/>
            <br /><br />
            <label htmlFor="username">Username</label>
            <input name="username" id="username" placeholder="enter your username " type="text" value={formData.username} onChange={handleInputChange}/>
            <br /><br />
            <label htmlFor="password">Password</label>
            <input name="password" id="password" placeholder="enter your password " type="password" value={formData.password} onChange={handleInputChange}/>
            <br /><br />
            <button>Submit</button>
        </form>
    );

}