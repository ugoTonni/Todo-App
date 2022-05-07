// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import "./index.css";
import SubmitForm from "./components/SubmitForm";
import TaskList from "./components/TaskList";
import Tasks from "./components/Todo";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./components/MainPage";

function App() {
  return (
    <div className="App container w-auto mx-auto p-6 h-20 bg-gradient-to-r from-sky-100 to-gray-100 to-sky-100">
      <Navbar />
      <Routes>
        <Route path="mainPage" element={<MainPage />}></Route>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="submitForm" element={<SubmitForm />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
