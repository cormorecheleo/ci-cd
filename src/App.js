import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import RegistrationForm from './Registration/RegistrationForm';

function App() {
  let [count, setCount] = useState(0);
  // eslint-disable-next-line no-undef
  // useEffect(() => {
  //   setTimeout(100, () => {
  //     setCount(count+1);
  //     c
  //   })
  // }, [count, setCount])
  
  const clickOnMe = () => {
    // for (let index = 1; index <= 1000; index++) {
    //   setTimeout(() => {
    //     setCount(index);
    //   }, index * 100); // Increment the delay for each iteration
    // }
    setCount(count+1);

  }
  return (
    <div className="App">
      <RegistrationForm/>
    </div>
  );
}

export default App;
