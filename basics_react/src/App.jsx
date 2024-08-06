import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx';
import { Link } from 'react-router-dom';
function App() {
  return (
    <>
      <h2>Day 1</h2>
      <Link to ="/card">Card</Link>
      <br></br>
      <br></br>
      <h2>Day 2</h2>
      <Link to ="/button">Button</Link>
      <br></br>
      <br></br>
      <h2>Day 3</h2>
      <Link to ="/Student">Student</Link>
      <br/>
      <br/>
      <h2>Day 4</h2>
      <Link to ="/usergreeting">UserGreeting</Link>
      <br/>
      <br/>
      <h2>Day 5</h2>
      <Link to ="/food">Food</Link>
      <br/>
      <br/>
      <Header/>
      <Footer/>
      <Food/>
      
   </>
  );  
}

export default App;
