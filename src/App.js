
import './App.css';
import app from './firebase.init';
import { getAuth} from "firebase/auth";

const auth = getAuth(app)

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder='Please Enter You Email' />
        <input type="password" placeholder='Please Enter Your Password' />
      </form>
    </div>
  );
}

export default App;
