import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
    <Routes>
    {/* <Route path="/home" element={<EXEED/>} /> 
    <Route path="/signup" element={<SignUp/>} /> */}
    <Route path="/" element={<Login/>} />
    {/* <Login /> */}
    </Routes>

    </div>
    
  );
}

export default App;
