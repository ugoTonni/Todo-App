// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SubmitForm from "./components/SubmitForm";
import TaskList from "./components/TaskList";
import Tasks from "./components/Todo";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="submitForm" element={<SubmitForm />}></Route>
        <Route path="mainPage" element={<MainPage />}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;
