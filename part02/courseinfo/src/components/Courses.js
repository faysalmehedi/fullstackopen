import React from 'react';

const Header = ({ name }) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
};

const Part = ({ name, exercises }) => {
    return (
        <div>
            <p>{name} {exercises}</p>
        </div>
    )
};

const Content = ({ parts }) => {

    return (
        <div>
            {parts.map( (part, i) =>
                <Part key={i} name={part.name} exercises={part.exercises}/>
                )}
        </div>
    )
};


const Total = ({ parts }) => {

    const total = parts.reduce( (prev, next) => prev + next.exercises, 0 );

    return (
        <div>
            <h4>Total {total} of exercises.</h4>
        </div>
    )
};

const Courses = ({ course }) => {
    return (
        <div>
            <Header name={ course.name } />
            <Content parts={ course.parts } />
            <Total parts={ course.parts } />
        </div>
    )
}

export default Courses;