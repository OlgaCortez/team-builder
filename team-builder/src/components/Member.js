import React from 'react';

const Member = props => {
    return (
        <>
        {props.members.map(member => (
            <div className="member" key={member.id}>
                <h2>{member.name}</h2>
                <h2>{member.email}</h2>
                <h2>{member.role}</h2>
                <button type="submit">Edit</button>
            </div>
        ))}
        </>
    );
};

export default Member;