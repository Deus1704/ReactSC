import logo from './logo.svg';
import './App.css';
import  Navbar  from "./Components/Navbar";
import  CodeInput  from "./Components/CodeInput";
import  Run  from "./Components/Run";
import  Input  from "./Components/Input";
import  Output  from "./Components/Output";
import  Chat  from "./Components/Chat";
function App() {
  let variable="sey";
  return (
    <>
      <Navbar/>
      <CodeInput/>
      <Run/>
      <Input/>
      <Output/>
      <Chat/>
    </>
  )
}

export default App;
// class is a reserved word in JS