import React from 'react';
import './App.css';
import { Counter ,User } from './Counter';

function App() {
  const [user, setUser]  =React.useState<User>({
    name: 'shlomo',
    age: 24,
    medicalCondition: 98,
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>yonatan Homework</p>
        <Counter name={user.name} age={user.age} medicalCondition={user.medicalCondition}/>
      </header>
    </div>
  );
}

export default App;
