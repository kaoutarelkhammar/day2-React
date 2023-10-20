import React from 'react';

export default function App() {
   const recipient = "Stephen";
   const salutation = <h2>Dear{recipient}</h2>;
   return salutation;
}

export default function MyComponent() {
    const myName = 'kaoutar';
    const Achievements = ["Achievement 1", "Achievement 2", "Achievement 1"];

    const currentDate = () => {
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1; // Month is zero-based, so add 1
        const year = now.getFullYear();
        return `${day}/${month}/${year}`;
      };

    return (
        <div>
      <h2>Dear Stephen</h2>
      <br />
      <p>Hi, my name is {myName}, and I would like to introduce myself to you. I am applying for the position of React developer.</p>
      <br />
      <p>I’ve attached my CV to this email.</p>
      <p>You can find details of my previous roles, experience, and achievements.</p>
      <p>I’m particularly proud of :</p>
      <ul id="my-achievements">
        {achievements.map((achievement, index) => (
          <li key={index} className="ln-achievement">
            {achievement}
          </li>
        ))}
      </ul>
      <p>I’m excited about this opportunity and would love to know more about the process, including timelines for you to decide on interviews.</p>
      <br />
      <span>Best regards,</span>
      <span>React</span>
      <b>{currentDate()}</b>
    </div>
    ) }

  
        