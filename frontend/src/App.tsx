import './App.css'
import { Route, Routes } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import MainPage from "./pages/mainPage/MainPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

function App() {
 
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
