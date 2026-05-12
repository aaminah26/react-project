/*import './App.css'
import Demo from './components/Demo'
import Header from './components/Header'
import StudentList from './components/StudentList'

export default function App() {
  return (
    <div className="sma-app">
      <Header />
      <main className="sma-main">
        <StudentList />
      </main>
      <Demo/>
      
    </div>
  );
}*/


/*import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Demo from "./components/Demo";
import Toggle from "./components/Toggle";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import{Route,Routes} from "react-router-dom";
export default function App(){
  return(
    <>
     <Demo/>
     <Toggle/>
     <RegisterForm/>
     <LoginForm/>
     <Navigation/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      
    </>
  )
}*/


import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import StudentList from './components/StudentList'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'
import CreateStudentPage from './components/CreateStudentPage'
import EditStudentPage from './components/EditStudentPage'
/*import AiChatPage from './components/AiChatPage'*/
import ChatPage from './components/ChatPage'
import StreamChatPage from './components/StreamChatPage'
export default function App() {
  return (
    <div className="sma-app">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={
          <div className="sma-auth-layout"><LoginForm /></div>
        } />
        <Route path="/register" element={
          <div className="sma-auth-layout"><RegisterForm /></div>
        } />

        <Route path="/students" element={
          <ProtectedRoute>
            <>
              <Header />
              <main className="sma-main">
                <StudentList />
              </main>
            </>
          </ProtectedRoute>
        } />

        {/* IMPORTANT: /students/new must come BEFORE /students/:id/edit
            otherwise 'new' would be matched as the :id parameter */}
        <Route path="/students/new" element={
          <ProtectedRoute><CreateStudentPage /></ProtectedRoute>
        } />

        <Route path="/students/:id/edit" element={
          <ProtectedRoute><EditStudentPage /></ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
        
        <Route path="/ai/chat" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
        <Route path="/ai/stream" element={<ProtectedRoute><StreamChatPage /></ProtectedRoute>} />
         
      </Routes>
    </div>
  );
}

// Complete route table for the app:
// GET /           → LandingPage       (public)
// GET /login      → LoginForm         (public)
// GET /register   → RegisterForm      (public)
// GET /students   → StudentList       (protected)
// GET /students/new       → CreateStudentPage (protected)
// GET /students/:id/edit  → EditStudentPage   (protected)