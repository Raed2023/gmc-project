import './css/SignUp.css';
import './css/MainPage.css';
import './css/SignIn.css';
import './css/Admin.css';
import "./components/addTask/Addtask.css";

import {BrowserRouter as  Router, Route, Routes} from "react-router-dom"
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import { useSelector } from 'react-redux';
import SignIns from './components/SignIns';
import Admin from './components/Admin/Admin';
import AddTask from './components/addTask/AddTask';
import TaskList from './components/taskList/TaskList';






function App() {
  const {user}=useSelector(state=>state)
  console.log(user)
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<MainPage/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/SignIns" element={<SignIns/>} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/AddTask" element={<AddTask/>} />
          <Route path="/TaskList" element={<TaskList/>} />


        </Routes>
        </Router>
    </div>
  );
}

export default App;