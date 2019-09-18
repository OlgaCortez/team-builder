import React from 'react';
import {useState} from 'react';
import Form from './components/Form';
import Member from './components/Member';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      name: "Olga Cortez",
      email: "olga@gmail.com",
      role: "Web Dev"
    }
  ]); 

  const addNewMember = member => {
    const newMember = {
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addNewMember={addNewMember} />
      <Member members={members} />
    </div>
  );
}

export default App;
