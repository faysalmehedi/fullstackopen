import React from 'react';
import Courses from './components/Courses';


const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          },
          {
            name: 'Redux',
            exercises: 9
          },
          {
            name: 'Nodejs',
            exercises: 19
          }
        ]
      };

    return (
        <div>
            <Courses course={course} />
        </div>
    )
};


export default App;