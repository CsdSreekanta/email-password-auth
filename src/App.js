import "./App.css";
import app from "./firebase.init";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
  };

  const handleOnSubmit = (event) => {
   
    event.preventDefault()
    console.log("form submitted");
  };
  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input onBlur={handleEmailBlur} type="email" placeholder="Enter your email" />
        <br />
        <input onBlur={handlePasswordBlur} type="password" placeholder="Enter your password" />
        <br />
        <input type="submit" value="log In" />
      </form>
    </div>
  );
}

export default App;
