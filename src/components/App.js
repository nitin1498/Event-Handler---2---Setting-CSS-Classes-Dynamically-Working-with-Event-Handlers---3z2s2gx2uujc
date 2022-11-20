import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick = (event) =>{
    console.log("Button id is:-" + event.target.getAttribute("id"));
  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button onclick={handleClick} id="button-a">Button A</button>
      <button onclick={handleClick} id="button-b">Button B</button>
    </div>
  )
}


export default App;
