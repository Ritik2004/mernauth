
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import SignUp from './Components/SignUp'; 
import SignIn from './Components/SignIn';
import Home from "./Components/Home"
import ForgotPassword from './Components/ForgotPassword';
import ResetPwd from './Components/ResetPwd'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/forgotpwd" element={<ForgotPassword/>}/>
        <Route path="/reset_password/:id/:token" element={<ResetPwd/>}/>
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;
