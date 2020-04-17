import React from "react";
import Login from "./Login";

var isLoggedIn = false;
const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {// Ternary Operator
      isLoggedIn ? <h1>Hello</h1> : <Login />

      // AND Operator
      // Left side is only evaluated if left is true

      // currentTime < 12 && <h1>Have you started working?</h1>
      }
    </div>
  );
}

export default App;
