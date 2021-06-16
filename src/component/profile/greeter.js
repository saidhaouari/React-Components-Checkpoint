import React from 'react';

function Greeter(props) {
    return <h1>hello {props.name}</h1>;
   }
   // And invoking the <Greeter/> component…
   const App = () => {
    return (
      <div>
        <Greeter name="world" /> {/* 💥 "world" is the prop value*/}
        <Greeter name="I am the King" /> {/* 💥 "I am the King" is the prop value*/}
      </div>
    );
   };
   export default App;