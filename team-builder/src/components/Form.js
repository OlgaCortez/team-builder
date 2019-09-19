import React, {useState, useEffect } from 'react';

const Form = props => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    useEffect(() => {
        const edit = props.memberToEdit;
        
    },[props.memberToEdit]);

    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({ name: "", email: "", role: "" });
        console.log(event.target.value);
    };

    return (
        <form onSubmit={submitForm}>

            <label htmlFor="name">Name</label>

            <input id="name" 
            type="text" 
            name="name" 
            onChange={handleChanges} 
            value={member.name} />

            <label htmlFor="email">Email</label>

            <input id="email" 
            type="text" 
            name="email" 
            onChange={handleChanges} 
            value={member.email} />

            <label htmlFor="role">Role</label>

            <input id="role" 
            type="text" 
            name="role" 
            onChange={handleChanges} 
            value={member.role} />

            <button type="submit">Add Member</button>
        
        </form>
    );
};

export default Form;