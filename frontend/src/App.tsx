import './App.css'
import { Route, Routes } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import MainPage from "./pages/mainPage/MainPage";
import ProjectsPage from "./pages/projectsPage/ProjectsPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import Footer from './components/footer/Footer'

function App() {
 
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
